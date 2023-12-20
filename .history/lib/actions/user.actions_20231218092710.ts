"use server"

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../mongoose';
import User from '../models/user.model';
import Thread from '../models/thread.model';
import { FilterQuery, SortOrder } from 'mongoose';


interface Params{
    userId: string,
    username:string,
    name:string,
    bio:string,
    image:string,
    path:string,
}

export async function updateUser({
    userId,
    username,
    name,
    bio,
    image,
    path,
}: Params): Promise<void>{
    connectToDB();

    try {
        await User.findOneAndUpdate(
            { id: userId },
            { 
                username: username.toLowerCase(),
                name,
                bio,
                image,
                onboarded: true,
            },
            { upsert: true }
            );
            
            if(path === '/profile/edit'){
                revalidatePath(path);
            }
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
}

export async function fetchUser(userId: string){
    try {
        connectToDB();
        return await User
        .findOne({id: userId})
        // .populate({
        //     path:'communities',
        //     model: Community,
        // })
    } catch (error:any) {
        throw new Error(`Failed to fetch user: ${error.message}`);
    }
}

export async function fetchUserPosts(userId: string){
    try {
        connectToDB();
        //Find all threads authored by user with the given userId
        const threads = await User.findOne({id:userId}).populate({
            path: 'threads',
            model: Thread,
            populate:{
                path: 'children',
                model: Thread,
                populate:{
                    path: 'author',
                    model: User,
                    select: 'name image id'
                }
            }
        })

        return threads;
    } catch (error: any) {   
        throw new Error(`Failed to fetch user post: ${error.message} `)
    }
}

export async function fetchUsers({
    userId,
    searchString ="",
    pageNumber = 1,
    pageSize = 20,
    sortBy= "desc",
} : {
    userId:string;
    searchString?: string;
    pageNumber?: number;
    pageSize?: number;
    sortBy?: SortOrder,
}){
    try {
        connectToDB();

        const skipAmount = (pageNumber - 1) * pageSize;

        const regex = new RegExp(searchString, "i");

        //initial query to get the users making it typeof User to resolve the $or error asking the type of query 
        const query:FilterQuery<typeof User> = {
            id: { $ne: userId }
        }
        //cheking if the searchstring does exist
        if(searchString.trim()! ==''){
            query.$or = [
                {username:{$regex:regex}},
                {name:{$regex:regex}}
            ]
        }
        //defining the sorting
        const sortOptions = { createdAt:sortBy };

        const usersQuery = User.find(query).sort(sortOptions).skip(skipAmount).limit(pageSize);
        const totalUsersCount = await User.countDocuments(query);
    } catch (error) {
        
    }
}
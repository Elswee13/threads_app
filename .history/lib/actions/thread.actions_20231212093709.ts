"use server"

import { revalidatePath } from 'next/cache';
import Thread from '../models/thread.model';
import User from '../models/user.model';
import { connectToDB } from '../mongoose';

interface Params{
    text: string,
    author: string,
    communityId: string | null,
    path: string,
}

export async function createThread({text,author,communityId,path}:Params){
    try {
        connectToDB();
    
            const createdThread = await Thread.create({
                text,
                author,
                community: null,
            });
            // Update user model
            await User.findByIdAndUpdate(author,{
                $push:{threads: createdThread._id}
            })
    
            revalidatePath(path);
    
        } catch (error: any) {
            throw new Error(`Error creating thread ${error.meesage}`)
        }
}

export async function fetchPosts(pageNumber=1,pageSize=20){
    connectToDB();

    //Calculate the number of post to skip
    const skipAmount = ( pageNumber - 1 ) * pageSize;

    //Fetch the post that has no parents (top level threads...)
    const postsQuery = Thread.find({ parentId:{$in:[null, undefined]}}).sort({createdAt:'desc'})
    .skip(skipAmount).limit(pageSize).populate({ path: 'author', model: User })
    .populate({ 
     path: 'children',
     populate:{
        path: 'author',
        model: User,
        select: "_id name parentId image",
     },
    });

    const totalPostCount = await Thread.countDocuments({parentId:{$in:[null, undefined]}})

    const posts = await postsQuery.exec();

    const isNext = totalPostCount > skipAmount + posts.length;
    return { posts, isNext };
}

export async function fetchThreadById(id:string){
    connectToDB();
    
    try{
        const thread = await Thread.findById(id).populate({
            path:'author',
            model:User,
            select: "_id id name image"
        }).populate({
            path: 'children',
            populate: [
                {
                    path: 'author',
                    model: User,
                    select: "_id name parentId image"
                },
                {
                    path:'children',
                    model: Thread,
                    populate:{
                        path: 'author',
                        model: User,
                        select: "_id id name parentId image"
                    }
                }
            ]
        }).exec();

        return thread;
    }catch(error: any){
        throw new Error(`Error fetching thread: ${error.message}`)
    }

}

export async function addComment(
    threadId: string,
    commentText: string,
    userId: string,
    path: string,
    ){
        connectToDB();

        try{
            // adding comment to a thread
            // Finding the OGThread by its ID

            const originalThread = await Thread.findById(threadId);

            if(!originalThread){
                throw new Error('Thread not found')
            }

            // create a new thread with the comment text
            const commentThread = new Thread();

        } catch(error:any){
            throw new Error(`Error adding commnent to thread: ${error.message}`)
        }

}
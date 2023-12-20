"use server"

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../../.history/lib/mongoose_20231206074743';
import User from '../models/user.model';


export async function updateUser( 
    userId: string,
    username: string,
    name: string,
    bio: string,
    image: string,
    path: string,
    ): Promise<void>{
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
    } catch (e) {
        
    }
}
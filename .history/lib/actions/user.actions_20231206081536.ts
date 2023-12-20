"use server"

import { connectToDB } from '../../.history/lib/mongoose_20231206074743';
import User from '../models/user.model';


export async function updateUser( 
    userId: string,
    username: string
    ): Promise<void>{
    connectToDB();

    await User.findOneAndUpdate(
        { id: userId },
        { 
            username: username.toLowerCase(), 
        }
        )
}
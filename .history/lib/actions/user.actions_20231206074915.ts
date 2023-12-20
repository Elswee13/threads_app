"use server"

import { connectToDB } from '../../.history/lib/mongoose_20231206074743';


export async function updateUser(): Promise<void>{
    connectToDB();
}
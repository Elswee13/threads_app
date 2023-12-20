import * as z from 'zod';
//  This is for saving user data

export const ThreadValidation = z.object({
    thread: z.string().nonempty().min(3,{message:"Minimum of 3 characters"}),
    accountId: z.string(),
})

export const CommentValidation = z.object({
    thread: z.string().nonempty().min(3,{message:"Minimum of 3 characters"}),
})
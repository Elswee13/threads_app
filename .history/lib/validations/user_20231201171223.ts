import * as z from 'zod';
//  This is for saving user data

export const userValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3,{message?:"Minimum 3 Characters"}).max(30).
})
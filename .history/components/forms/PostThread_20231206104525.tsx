"use client"

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { usePathname, useRouter } from 'next/navigation';

// import { updateUser } from "@/lib/actions/user.actions";
import { ThreadValidation } from '@/lib/validations/thread';

interface Props{
    user:{
        id:string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
    btnTitle: string;
}


    
    


function PostThread({userId}:{userId:string}){
    const router = useRouter();
    const pathname= usePathname();

    const form = useForm({
        resolver: zodResolver(ThreadValidation),
        defaultValues:{
            thread:'',
            accountId: userId,
        }
    })
    return(
        <Form {...form}>
            <form
             onSubmit={form.handleSubmit(onSubmit)}
             className="flex flex-col justify-start gap-10"
            >
                 <FormField
                    control={form.control}
                    name='thread'
                    render={({ field }) => (
                   <FormItem className='flex flex-col w-full gap-3'>
                    <FormLabel className='text-base-semibold text-light-2'>
                      Content 
                    </FormLabel>
                     <FormControl>
                        <Textarea
                          type="text"
                          className='account-form_input no-focus'
                            {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                        </FormItem>
                          )}
                    />
            </form>
        </Form>

    )
}

export default PostThread;
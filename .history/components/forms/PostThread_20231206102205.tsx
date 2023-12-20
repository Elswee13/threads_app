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
import { updateUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from 'next/navigation';

import { userValidation } from '@/lib/validations/user';

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
    const [files, setfiles] = useState<File[]>([])
    const { startUpload } = useUploadThing("media");
    const router = useRouter();
    const pathname= usePathname();

    const form = useForm({
        resolver: zodResolver(userValidation),
        defaultValues:{
            profile_photo: user?.image || "",
            name: user?.name || "",
            username: user?.username || "",
            bio: user?.bio || ""
        }
    })
    return(
        <h1>Post Thread form</h1>
    )
}

export default PostThread;
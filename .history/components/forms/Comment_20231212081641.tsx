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

interface Props{
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
}

const Comment = ({threadId,currentUserImg,currentUserId} : Props) => {
    return(
        <Form {...form}>
            <form
             onSubmit={form.handleSubmit(onSubmit)}
             className="mt-10 flex flex-col justify-start gap-10"
            >
                 <FormField
                    control={form.control}
                    name='thread'
                    render={({ field }) => (
                   <FormItem className='flex flex-col w-full gap-3'>
                    <FormLabel className='text-base-semibold text-light-2'>
                      Content 
                    </FormLabel>
                     <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1" >
                        <Textarea
                          rows={15}
                            {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                        </FormItem>
                          )}
                    />
                    <Button 
                    type="submit"
                    className="bg-primary-500"
                    >
                    Post Thread
                    </Button>
            </form>
        </Form>
    )
}

export default Comment;
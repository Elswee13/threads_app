import ThreadCard from "@/components/cards/ThreadCard";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";

const Page = async ({ params } : { params: { id: string } }) => {
    if(!params.id) return null;

    const user = await currentUser();
    if(!user) return null;

    const userInfo = await fetchUser(user.id);
    if(!userInfo?.onboarded) redirect('/onboarding');

    return(

        <section className="relative" >
            <div className="" >
                <ThreadCard
                    key = {post._id}
                    id = {post._id}
                    currentUserId = {user?.id  || ""}
                    parentId = {post.parentId}
                    content = {post.text}
                    author = {post.author}
                    community = {post.community}
                    createdAt = {post.createdAt}
                    comments = {post.children}
                    />
            </div>
        </section>
    )
}

export default Page;
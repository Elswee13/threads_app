import ThreadCard from "@/components/cards/ThreadCard";
import React from "react";

const Page = ({ params } : { params: { id: string } }) => {
    if(!params.id) return null;

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
}

export default Page;
interface Props{
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
}

const Comment = ({threadId,currentUserImg,currentUserId} : Props) => {
    return(
        <div>
            <h1 className="text-light-1" >Comment Form</h1>
        </div>
    )
}

export default Comment;
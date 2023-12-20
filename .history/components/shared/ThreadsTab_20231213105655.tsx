import { fetchUserPosts } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import ThreadCard from '@/components/cards/ThreadCard';


interface Props{
    currentUserId: string;
    accountId: string;
    accountType:string;
}


const ThreadsTab = async({
    currentUserId,
    accountId,
    accountType,
}: Props) => {
    let result = await fetchUserPosts(accountId); 

    if(!result) redirect('/')

    return(
        <section className="mt-9 flex flex-col gap-10" >
            {result.threads.map((thread)=> (
                <ThreadCard/>
            ))}
        </section>
    )
}

export default ThreadsTab;
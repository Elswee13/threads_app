import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import PostThread from '@/components/forms/PostThread';


const Page = async () => {
    const user = await currentUser();
    if(!user) return null;

    const userInfo = await fetchUser(user.id);

    if(!userInfo?.onboarded) redirect('/onboarding');
    return(
        <section className="" >
            Profile
        </section>
    )
}

export default Page;
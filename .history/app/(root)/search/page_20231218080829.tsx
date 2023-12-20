import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import ProfileHeader from "@/components/shared/ProfileHeader";
import { profileTabs } from '@/constants';
import Image from "next/image";
import ThreadsTab from '@/components/shared/ThreadsTab';

const Page = async () => {

    const user = await currentUser();
    if(!user) return null;

    const userInfo = await fetchUser(params.id);

    if(!userInfo?.onboarded) redirect('/onboarding');

  return (
    <section className="" >
        <h1 className="head-text mb-10" >Search</h1>
    </section>
  )
}

export default Page;
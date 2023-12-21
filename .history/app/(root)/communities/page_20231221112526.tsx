import { fetchUsers, fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import ProfileHeader from "@/components/shared/ProfileHeader";
import { profileTabs } from '@/constants';
import Image from "next/image";
import ThreadsTab from '@/components/shared/ThreadsTab';
import UserCard from '@/components/cards/UserCard';
import { fetchCommunities } from '@/lib/actions/community.actions';

const Page = async () => {

    const user = await currentUser();
    if(!user) return null;

    const userInfo = await fetchUser(user.id);

    if(!userInfo?.onboarded) redirect('/onboarding');

    //aditional function to fetch all the users
    const result = await fetchCommunities({
      searchString: '',
      pageNumber: 1,
      pageSize: 25,
    });

  return (
    <section className="" >
        <h1 className="head-text mb-10" >Search</h1>

        {/* SearchBar */}


        <div className="mt-14 flex flex-col gap-9" >
          {result.users.length === 0 ? (
            <p className="no-result" >No Users</p>
          ):(
            <>
             {result.users.map((person)=>(
              <UserCard
                key ={ person.id}
                id= {person.id}
                name= {person.name}
                username ={person.username}
                imgUrl= {person.image}
                personType= 'User'
              />
             ))}
            </>
          )}
        </div>
    </section>
  )
}

export default Page;
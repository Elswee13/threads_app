import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs,TabsContent,TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from '@/constants';
import Image from "next/image";

const Page = async ({params}:{params: {id:string}}) => {
    const user = await currentUser();
    if(!user) return null;

    const userInfo = await fetchUser(params.id);

    if(!userInfo?.onboarded) redirect('/onboarding');

    return(
        <section className="" >
            <ProfileHeader
             accountId={userInfo.id}
             authUserId={user.id}
             name={userInfo.name}
             username={userInfo.username}
             imgUrl={userInfo.image}
             bio={userInfo.bio}
            />

            <div className="mt-9" >
                <Tabs defaultValue="threads" className="w-full" >
                    <TabsList className="tab" >
                        {profileTabs.map((tab)=>(
                            <TabsTrigger key={tab.label}  >
                                <Image/>
                                <p className="max-sm:hidden" >{tab.label}</p>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>
        </section>
    )
}

export default Page;
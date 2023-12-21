
import { currentUser } from '@clerk/nextjs';
import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs,TabsContent,TabsList, TabsTrigger } from "@/components/ui/tabs";
import { communityTabs } from '@/constants';
import Image from "next/image";
import ThreadsTab from '@/components/shared/ThreadsTab';
import { fetchCommunityDetails } from '@/lib/actions/community.actions';

const Page = async ({params}:{params: {id:string}}) => {
    const user = await currentUser();
    if(!user) return null;

    const communityDetails = await fetchCommunityDetails(params.id);

    return(
        <section className="" >
            <ProfileHeader
             accountId={communityDetails.id}
             authUserId={user.id}
             name={communityDetails.name}
             username={communityDetails.username}
             imgUrl={communityDetails.image}
             bio={communityDetails.bio}
             type="Community"
            />

            <div className="mt-9" >
                <Tabs defaultValue="threads" className="w-full" >
                    <TabsList className="tab" >
                        {profileTabs.map((tab)=>(
                            <TabsTrigger key={tab.label} value={tab.value} className="tab"  >
                                <Image
                                 src={tab.icon}
                                 alt={tab.label}
                                 width={24}
                                 height={24}
                                 className="object-contain"
                                />
                                <p className="max-sm:hidden" >{tab.label}</p>
                                {tab.label === 'Threads' && (
                                    <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2" >
                                        {userInfo?.threads?.length}
                                    </p>
                                )}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {profileTabs.map((tab)=>(
                                <TabsContent
                                 key={`content-${tab.label}`}
                                 value={tab.value}
                                 className="w-full text-light-1"
                                >
                                    <ThreadsTab
                                     currentUserId={user.id}
                                     accountId={userInfo.id}
                                     accountType="User"
                                    />
                                </TabsContent>
                            ))}
                </Tabs>
            </div>
        </section>
    )
}

export default Page;
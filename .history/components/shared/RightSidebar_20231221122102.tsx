import { currentUser } from "@clerk/nextjs";

import UserCard from "../cards/UserCard";

import { fetchCommunities } from "@/lib/actions/community.actions";
import { fetchUsers } from "@/lib/actions/user.actions";



async function RightSidebar(){
    //this variables is to fetch user and communities to appear in the suggested area
    const user = await currentUser();
    if(!user)return null;

    const similarIdeas = await fetchUsers({
        userId: user.id,
        pageSize: 4,
    });

    const suggestedCommunities = await fetchCommunities({ pageSize: 4 });

    return(
        <section className="custom-scrollbar rightsidebar" >
            <div className="flex flex-1 flex-col justify-start" >
                <h3 className="text-heading4-medium text-light-1" >Suggested Communities</h3>

                <div className="mt-7 flex-w[350px] flex-col gap-9" >
                    {suggestedCommunities.communities.length>0?(
                        <>
                         {suggestedCommunities.communities.map((community)=>(
                            <UserCard
                                key={community.id}
                                id={community.id}
                                name={community.name}
                                username={community.username}
                                imgUrl={community.image}
                                personType="Community"
                            />
                         ))}
                        </>
                    ):
                        (
                            <p className="!text-base-regular text-light-3" >No Communities Yet</p>
                        )
                    }
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-start" >
                <h3 className="text-heading4-medium text-light-1" >Suggested Users</h3>
                <div className="mt-7 flex-w[350px] flex-col gap-9" >
                    {similarIdeas.users.length>0?(
                        <>
                         {similarIdeas.users.map((person)=>(
                            <UserCard
                                key={person.id}
                                id={person.id}
                                name={person.name}
                                username={person.username}
                                imgUrl={person.image}
                                personType="Users"
                            />
                         ))}
                        </>
                    ):
                        (
                            <p className="!text-base-regular text-light-3" >No Users Yet</p>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default RightSidebar;
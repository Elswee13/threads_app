import React from "react";
import { sidebarLinks } from '@/constants/index';
import Link from 'next/link';
import Image from "next/image";

function LeftSidebar(){
    return(
        <section className="custom-scrollbar leftsidebar" >
            <div className="flex w-full flex-1 flex-col gap-6 px-6" >
                {sidebarLinks.map((link)=>(
                    <Link 
                     href={link.route}
                     key={link.label}
                     className="leftsidebar_link"
                    >
                        <Image/>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default LeftSidebar
import React from "react";
import Link from "next/link";
import Image from "next/image";


function Topbar(){
    return(
        <nav className="topbar" >
            <Link
             href="/"
             className="flex items-center gap-4"
            >
            <Image
             src="/logo.svg"
             alt="logo"
             width={28}
             height={28}
            />
            <p className="" > </p>
            </Link>
        </nav>
    )
}

export default Topbar;
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
             
            />
            </Link>
        </nav>
    )
}

export default Topbar;
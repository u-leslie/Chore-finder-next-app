import Link from "next/link";
import React from "react"

export default function navbar(){
   return(
    <nav>
        <div className="flex justify-between items-center p-6 container">
           <Link href='/' className="text-[25px] font-bold">ChoreFinder</Link>
           <ul className="flex gap-4 text-[1.2rem] text-md">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/create-job'>Add Chore</Link></li>
           </ul>
        </div>
    </nav>
   )
}
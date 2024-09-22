import About from "../about/page";
import Contact from "../contact/page";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className="flex justify-between w-full p-4 bg-blue-800 text-white gap-3">
            <div>Navbar</div>
            <div className="space-x-5">
                <Link href={"/"}>HOME</Link>
                <Link href={"/about"}>ABOUT</Link>
                <Link href={"/contact"}>CONTACT</Link>
            </div>
        </div>
    )
}
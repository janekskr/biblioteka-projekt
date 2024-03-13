import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUserCircle, FaUserPlus } from "react-icons/fa";
import { BiBookAdd } from "react-icons/bi";

export default function Header() {
  return (
    <div className="flex justify-between items-center absolute top-0 w-full z-10 py-5 px-10 bg-slate-500">
      <Link href="/" className="flex gap-[15px] items-center">
        <Image src="/icon.png" alt="biblioteka ikona" width={70} height={50} />
        <p className="text-white text-xl font-bold">Biblioteka</p>
      </Link>
      <ul className="flex gap-[50px] text-white text-sm items-center">
        <li>
          <Link href="/book/add" className="flex flex-col gap-2 items-center ">
            <BiBookAdd size={35} />
          </Link>
        </li>
        <li>
          <Link href="/add" className="flex flex-col gap-2 items-center ">
            <FaUserPlus size={35} />
          </Link>
        </li>
        <li>
          <Link href="/profile" className="flex flex-col gap-2 items-center ">
            <FaRegUserCircle size={35} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

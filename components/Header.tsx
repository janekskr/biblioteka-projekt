import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center absolute top-0 w-full z-10 py-6 px-10 bg-slate-500'>
        <Link href="/">
            Biblioteka
        </Link>
        <ul className='flex gap-[20px]'>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/add">Dodaj użytkownika</Link></li>
            <li><Link href="/book/add">Dodaj książke</Link></li>
        </ul>
    </div>
  )
}

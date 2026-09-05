'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoHomeOutline } from 'react-icons/io5';
import { IoMdStopwatch } from 'react-icons/io';
import { BsGraphUp } from 'react-icons/bs';


export default function Navigation() {
  const pathname = usePathname();
  const links = <>
    <li><Link className={pathname === '/' ? 'bg-[#244D3F] text-[#FFFFFF]':"" } href="/"><IoHomeOutline></IoHomeOutline> Home</Link></li>
    <li><Link className={pathname === '/timeline' ? 'bg-[#244D3F] text-[#FFFFFF]':""} href="/timeline"> <IoMdStopwatch></IoMdStopwatch> Timeline</Link></li>
    <li><Link className={pathname === '/stats' ? 'bg-[#244D3F] text-[#FFFFFF]':""} href="/stats"><BsGraphUp></BsGraphUp> Stats</Link></li>
  </>
  return (
    <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button className="btn btn-ghost text-xl">daisyUI</button>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-3">
      {links}
      </ul>
    </div>
   
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
      {links}
    </ul>
  </div>
</div>
  )
}


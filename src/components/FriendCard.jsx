import React from 'react'
import Link from 'next/link'
export default function FriendCard({ friend }) {
  const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } =friend
  return (
   
    <Link href={`/${id}`}>
      <div className="card bg-base-100 w-80 lg:w-96  shadow-sm mx-auto">
  <figure className="rounded-full w-20 h-20 mx-auto mt-4 overflow-hidden">
        <img
          
         className='w-full h-full object-cover object-top '
          
          src={picture} alt="" />
      
  </figure>
  <div className="card-body items-center text-center">
        <h2 className="card-title text-[#1F2937]">{name}</h2>
        <p className='text-[#64748B]'>{days_since_contact} day ago</p>
         <div className='flex gap-2 mt-2 text-xs'>{
          tags.map((tag, ind) => (
             <ul key={ind}><li className='bg-green-200 rounded-full px-2 text-center'>{tag}</li></ul>
          ))
          }</div>
        <span className={`mt-1.5 rounded-full px-2 text-xs text-[#FFFFFF] ${status == 'overdue' ? 'bg-red-300 text-black' : status == 'almost-due' ? 'bg-amber-500 ' :
          'bg-green-900'
        }`}>{status}</span>
  </div>
</div>
    </Link>
  )
}

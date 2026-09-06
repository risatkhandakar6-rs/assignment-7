
import React from 'react'
import { GoArchive } from 'react-icons/go';
import { LuMessageSquareText } from 'react-icons/lu';
import { MdDelete, MdOutlinePhoneCallback, MdOutlineVideoCameraFront } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';

import QuickCheckIn from '@/components/QuickCheckIn';




export default async function FriendDetailsPage({ params }) {


  const { cardid } = await params;
  const res = await fetch('http://localhost:3000/data.json');
  const friends = await res.json();
  const friend = friends.find((f) => f.id.toString() === cardid);
  if (!friend) {
    <div>Friend not found</div>
  }
    
  const {id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date}=friend
  return (
    
      <div className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left column */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        <div className="card bg-base-100 shadow-sm p-6 items-center text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
            <img src={picture} alt={name} className="w-full h-full object-cover object-top" />
          </div>
          <h2 className="font-bold text-lg">{name}</h2>
          <span className={`mt-1.5 rounded-full px-2 text-xs text-[#FFFFFF] ${status == 'overdue' ? 'bg-red-300 text-black' : status == 'almost-due' ? 'bg-amber-500 ' :
          'bg-green-900'
            }`}>{status}</span>
          
             <p className='flex gap-2 mt-2 text-xs'>{
          tags.map((tag, ind) => (
             <ul key={ind}><li className='bg-green-200 rounded-full px-2 text-center'>{tag}</li></ul>
          ))
          }</p>
          <i className='text-[#64748B] mt-2 whitespace-nowrap text-xs'>{bio}</i>
          <p className='text-xs text-[#64748B]'>{email}</p>
          
         
        </div>

        <div className="flex flex-col gap-2">
          <button className="btn btn-outline justify-start"><RiNotificationSnoozeLine> </RiNotificationSnoozeLine> Soonz 2 Weeks</button>
          <button className="btn btn-outline justify-start"><GoArchive></GoArchive> Archive</button>
          <button className="btn btn-outline text-red-500 justify-start"><MdDelete></MdDelete> Delete</button>
        </div>
      </div>

    
      <div className="lg:col-span-3 flex flex-col gap-6">
       
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-sm p-6 text-center">
            <p className="text-2xl font-bold  text-[#244D3F]">{days_since_contact}</p>
            <p className=" text-sm  text-[#64748B]">Days Since Contact</p>
          </div>
          <div className="card bg-base-100 shadow-sm p-6 text-center">
            <p className="text-2xl font-bold  text-[#244D3F]">{goal}</p>
            <p className=" text-sm  text-[#64748B]">Goal (Days)</p>
          </div>
          <div className="card bg-base-100 shadow-sm p-6 text-center">
            <p className="text-2xl font-bold  text-[#244D3F] ">{next_due_date}</p>
           
            <p className=" text-sm  text-[#64748B]">Next Due</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm p-6 flex flex-row justify-between items-center">
          <div>
            <h3 className="font-semibold  text-[#244D3F]">Relationship Goal</h3>
            <p className="text-gray-500 text-sm mt-1">
              Connect every <span className="font-bold">{goal} days</span>
            </p>
          </div>
          <button className="btn btn-sm btn-outline">Edit</button>
        </div>

      
        <div>
          <QuickCheckIn friend={friend}></QuickCheckIn>
       </div>
      </div>
    </div>
  )
}

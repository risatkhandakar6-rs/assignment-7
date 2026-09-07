"use client"
import { useContext } from 'react';
import { LuMessageSquareText } from 'react-icons/lu';
import { MdOutlinePhoneCallback, MdOutlineVideoCameraFront } from 'react-icons/md';
import { KnockContext } from '@/timelineContext/TimelineContext';
import { toast } from 'react-toastify';  

export default function QuickCheckIn({ friend }) {
  const { addKnock } = useContext(KnockContext);

  const handleKnock = (type) => {
    addKnock(friend, type);
     toast.success(`${type} logged with ${friend.name}`);
  };

  return (
    <div className="card bg-base-100 shadow-sm p-6">
      <h3 className="font-semibold mb-4 text-[#244D3F]">Quick Check-In</h3>
      <div className="grid grid-cols-3 gap-4">
        <button className="btn btn-outline flex-col h-20" onClick={() => handleKnock('call')}>
          <p className='text-lg sm:text-3xl '><MdOutlinePhoneCallback /></p>
          <span className="text-sm">Call</span>
        </button>
        <button className="btn btn-outline flex-col h-20" onClick={() => handleKnock('message')}>
          <p className='text-lg sm:text-3xl'><LuMessageSquareText /></p>
          <span className="text-sm">Text</span>
        </button>
        <button className="btn btn-outline flex-col h-20" onClick={() => handleKnock('video')}>
          <p className='text-lg sm:text-3xl'><MdOutlineVideoCameraFront /></p>
          <span className="text-sm">Video</span>
        </button>
      </div>
    </div>
  )
}
import React from 'react'

export default function Banner() {
  return (
    <div>
      <h1 className='font-bold text-3xl sm:text-6xl text-center text-[#1F2937] m-0'>Friends to keep close in your life</h1>
      <p className='text-[#64748B] text-center mt-4 '>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className='hidden sm:inline'/>
        relationships <br className='inline sm:hidden' /> that matter most.</p>
      <button className='flex mx-auto  text-[#FFFFFF] bg-[#244D3F] px-2 py-1 rounded-sm mt-10'>+Add A Friend</button>
      <div className='grid grid-cols-4 mx-auto container gap-2 mt-10'>
      
        <div className="px-2 py-3 sm:px-6 sm:py-6 lg:px-12 lg:py-8 text-center bg-base-100 shadow-sm rounded-2xl">
    <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl text-[#244D3F]">10</h1>
    <p className="text-xs sm:text-sm text-[#64748B]">Total Friends</p>
  </div>
        <div className="px-2 py-3 sm:px-6 sm:py-6 lg:px-12 lg:py-8 text-center bg-base-100 shadow-sm rounded-2xl">
    <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl text-[#244D3F]">3</h1>
    <p className="text-xs sm:text-sm text-[#64748B]">On Track</p>
  </div>
        <div className="px-2 py-3 sm:px-6 sm:py-6 lg:px-12 lg:py-8 text-center bg-base-100 shadow-sm rounded-2xl">
    <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl text-[#244D3F]">6</h1>
    <p className="text-xs sm:text-sm text-[#64748B]">Need Attention</p>
  </div>
        <div className="px-2 py-3 sm:px-6 sm:py-6 lg:px-12 lg:py-8 text-center bg-base-100 shadow-sm rounded-2xl">
    <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl text-[#244D3F]">12</h1>
    <p className="text-xs sm:text-sm text-[#64748B]">Interactions This Month</p>
  </div>
      </div>
    </div>
  )
}

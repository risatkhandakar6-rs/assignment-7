import React from 'react'
import Banner from "@/components/Banner"
import FriendCard from "@/components/FriendCard"


export default async function Friends() {
  const res = await fetch('http://localhost:3000/data.json');
  const friends = await res.json();
  return (
    <div>
      <Banner></Banner>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container mx-auto gap-8 mt-20 '>
        {
          friends.map((friend, ind)=> <FriendCard key={ind} friend={friend}></FriendCard>)

        }
      </div>
      
    </div>
  )
}

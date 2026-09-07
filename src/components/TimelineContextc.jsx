export default function TimelineContextc({ knock }) {
  return (
    <div className="bg-base-100 shadow-sm container py-5 px ">
      {knock.type === "call" && (

        <div className="flex gap-4">
          <div className="ml-5 flex items-center"> <img className="w-8" src="/assets/call.png" alt="" /></div>
          <div>
            <p> <span className="text-[#244D3F] font-bold ">Call</span><span className="text-[#64748B] "> with {knock.name}</span></p>
            <small className="text-[#64748B] ">{knock.date}</small>
            
          </div>
       </div>

      )}

      {knock.type === "message" && (
         <div className="flex gap-4">
          <div className="ml-5 flex  items-center"> <img className="w-8" src="/assets/text.png" alt="" /></div>
          <div>
          <p> <span className="text-[#244D3F] font-bold ">Message</span><span className="text-[#64748B] "> with {knock.name}</span></p>
            <small className="text-[#64748B] ">{knock.date}</small>
          </div>
       </div>

      )}

      {knock.type === "video" && (
         <div className="flex gap-4">
          <div className="ml-5 flex items-center"> <img className="w-8" src="/assets/video.png" alt="" /></div>
          <div>
            <p> <span className="text-[#244D3F] font-bold ">Video</span><span className="text-[#64748B] "> with {knock.name}</span></p>
            <small className="text-[#64748B] ">{knock.date}</small>
            
          </div>
       </div>
      )}
    </div>
  );
}
export default function TimelineContextc({ knock }) {
  return (
    <div className="bg-base-100 shadow-xl container py-5 px ">
      {knock.type === "call" && (

        <div className="flex gap-4">
          <div className="ml-5 items-center"> <img src="/assets/call.png" alt="" /></div>
          <div>
            <p> Call with {knock.name}</p>
            <small>{knock.date}</small>
            
          </div>
       </div>

      )}

      {knock.type === "message" && (
         <div className="flex gap-4">
          <div className="ml-5 flex  items-center"> <img className="w-8" src="/assets/text.png" alt="" /></div>
          <div>
            <p> Text with {knock.name}</p>
            <small>{knock.date}</small>
            
          </div>
       </div>

      )}

      {knock.type === "video" && (
         <div className="flex gap-4">
          <div className="ml-5 items-center"> <img src="/assets/video.png" alt="" /></div>
          <div>
            <p> Video with {knock.name}</p>
            <small>{knock.date}</small>
            
          </div>
       </div>
      )}
    </div>
  );
}
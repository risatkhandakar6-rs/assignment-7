export default function TimelineContextc({ knock }) {
  return (
    <div className="bg-base-100 shadow-xl container py-5 px ">
      {knock.type === "call" && (

        <div>
          <div> <img src="/assets/call.png" alt="" /></div>
          <div>
            <p> call with {knock.name}</p>
          </div>
       </div>

      )}

      {knock.type === "message" && (
        <h2>Message from {knock.name}</h2>
      )}

      {knock.type === "video" && (
        <h2>Video Call from {knock.name}</h2>
      )}
    </div>
  );
}
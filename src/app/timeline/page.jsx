"use client";
import { useContext, useState } from "react";
import { KnockContext } from "@/timelineContext/TimelineContext";
import TimelineContextc from "@/components/TimelineContextc";

export default function TimeLine() {
  const { knocks } = useContext(KnockContext);
  const [filter, setFilter] = useState("all");
  const filterdKnocks =
    filter === "all"
      ? knocks
      : knocks.filter((knock) => knock.type === filter);
  
  return (
    <div className="container grid grid-cols-1 gap-3 mx-auto px-4 py-6">
      <h1>Friend Knocks</h1>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}
        className="select select-bordered w-full max-w-xs mb-6 text-sm">
         <option value="all">Filter timeline</option>
        <option value="call">Call</option>
        <option value="message">Text</option>
        <option value="video">Video</option>
      </select>

      <div>

        {filterdKnocks.length === 0 && (
          <p className="text-[#64748B] text-sm">nooo entires found</p>
        )}
        {
          filterdKnocks.map((knock) => (
            <TimelineContextc key={knock.id} knock={knock}></TimelineContextc>
          ))
        }
      </div>
    </div>
  )
}

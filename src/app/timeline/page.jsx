"use client";
import { useContext } from "react";
import { KnockContext } from "@/timelineContext/TimelineContext";
import TimelineContextc from "@/components/TimelineContextc";

export default function TimeLine() {
  const { knocks } = useContext(KnockContext);
  return (
    <div className="container grid grid-cols-1 gap-3 mx-auto px-4 py-6">
      <h1>Friend Knocks</h1>
      {knocks.map((knock) => (
      <TimelineContextc key={knock.id} knock={knock} ></TimelineContextc>
      )
      )}
    </div>
  )
}

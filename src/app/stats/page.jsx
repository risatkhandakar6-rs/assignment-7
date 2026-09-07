"use client";

import { useContext } from "react";
import { KnockContext } from "@/timelineContext/TimelineContext";


import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";


const COLORS = {
  Text: "#7C3AED",  
  Call: "#1F2937",   
  Video: "#16A34A", 
};
export default function ChartPage() {
  const { knocks } = useContext(KnockContext);

  const callCount = knocks.filter((knock) => knock.type === "call").length;
  const messageCount = knocks.filter((knock) => knock.type === "message").length;
  const videoCount = knocks.filter((knock) => knock.type === "video").length;

  const chartData = [
    { name: "Text", value: messageCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-[#1F2937]">Friendship Analytics</h1>

      <div className="card bg-base-100 shadow-sm p-6">
        <h3 className="font-semibold text-[#244D3F] mb-4">By Interaction Type</h3>

        <div style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={4}
                stroke="none"
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={COLORS[entry.name]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

     
        <div className="flex justify-center gap-6 mt-2">
          {chartData.map((entry) => (
            <div key={entry.name} className="flex items-center gap-1.5 text-sm text-[#64748B]">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: COLORS[entry.name] }}
              />
              {entry.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
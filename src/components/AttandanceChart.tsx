"use client";

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 70,
    absent: 30,
  },
  {
    name: 'Tue',
    present: 80,
    absent: 20,
  },
  {
    name: 'Wen',
    present: 86,
    absent: 14,
  },
  {
    name: 'Thu',
    present: 80,
    absent: 20,
  },
  {
    name: 'Fri',
    present: 70,
    absent: 30,
  },
];

const AttandanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attandace</h1>
        <Image src={"/moreDark.png"} alt="more-icon" width={20} height={20} className="" />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
          />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign='top'
            wrapperStyle={{ paddingBlock: "20px" }}
          />
          <Bar
            dataKey="present"
            fill="#fae27c"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#c3ebfa"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default AttandanceChart;
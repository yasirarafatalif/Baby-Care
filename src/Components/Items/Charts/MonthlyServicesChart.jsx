"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MonthlyServicesChart = ({ data }) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="services" fill="#3b82f6" radius={[6, 6, 0, 0]} />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyServicesChart;
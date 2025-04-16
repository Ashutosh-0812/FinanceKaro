'use client';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { groupByCategory } from '@/lib/utils';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#d0ed57'];

export default function CategoryChart() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api');
      const transactions = await res.json();
      setData(groupByCategory(transactions));
    }
    fetchData();
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">Spending by Category</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={80} label>
            {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
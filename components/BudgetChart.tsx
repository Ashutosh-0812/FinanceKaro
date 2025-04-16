'use client';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { groupByMonth } from '@/lib/utils';

export default function BudgetChart() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api');
      const transactions = await res.json();
      setData(groupByMonth(transactions));
    }
    fetchData();
  }, []);

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
'use client';
import { useEffect, useState } from 'react';

export default function BudgetSummary() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api');
      const data = await res.json();
      setTransactions(data);
    }
    fetchData();
  }, []);

  const total = transactions.reduce((sum, t) => sum + t.amount, 0);
  const recent = transactions.slice(-3).reverse();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-6 border rounded-lg bg-white shadow-sm">
        <h2 className="text-lg font-medium text-gray-600">Total Spent</h2>
        <p className="text-2xl font-bold text-gray-800 mt-2">₹{total.toLocaleString()}</p>
        <div className="mt-4 h-2 bg-gradient-to-r from-blue-100 to-blue-300 rounded-full"></div>
      </div>
      
      <div className="p-6 border rounded-lg bg-white shadow-sm col-span-2">
        <h2 className="text-lg font-medium text-gray-600">Recent Transactions</h2>
        <ul className="mt-4 space-y-3">
          {recent.map((t) => (
            <li 
              key={t._id} 
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-700">{t.description}</span>
              <span className="font-medium text-red-500">- ₹{t.amount.toLocaleString()}</span>
            </li>
          ))}
        </ul>
        {recent.length === 0 && (
          <p className="text-gray-400 text-sm mt-2">No recent transactions</p>
        )}
      </div>
    </div>
  );
}
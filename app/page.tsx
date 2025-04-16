// app/page.tsx
'use client';
import { useEffect, useState } from 'react';
import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import BudgetChart from '@/components/BudgetChart';
import CategoryChart from '@/components/CategoryChart';
import BudgetSummary from '@/components/BudgetSummary';
import { Card } from '@/components/ui/card';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6 bg-gray-50 min-h-screen">
      <Card className="p-6 text-center">
        <h1 className="text-3xl font-extrabold">📊 Personal Finance Tracker</h1>
      </Card>

      <TransactionForm onAdd={() => setRefreshKey(prev => prev + 1)} />

      <BudgetSummary />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
          <CategoryChart />
        </Card>
        
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">Budget Progress</h3>
          <BudgetChart />
        </Card>
      </div>

      <TransactionList key={refreshKey} />
    </main>
  );
}
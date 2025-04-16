// components/TransactionList.tsx
'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from '@/components/ui/tag';
import { EditableField } from '@/components/ui/editable-field';

export default function TransactionList() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api');
      const data = await res.json();
      setTransactions(data);
    }
    fetchData();
  }, []);

  async function handleDelete(id: string) {
    await fetch(`/api/${id}`, { method: 'DELETE' });
    setTransactions(transactions.filter((t) => t._id !== id));
  }

  async function handleUpdate(id: string, field: string, value: string | number) {
    const updated = await fetch(`/api/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: value })
    }).then(res => res.json());
    
    setTransactions(transactions.map(t => t._id === id ? updated : t));
  }

  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">All Transactions</h2>
        <div className="space-y-3">
          {transactions.map((t) => (
            <div key={t._id} className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <EditableField
                    value={t.description}
                    onSave={(value) => handleUpdate(t._id, 'description', value)}
                    className="font-medium text-base"
                  />
                  <div className="flex items-center gap-2 mt-1">
                    <EditableField
                      value={t.amount}
                      onSave={(value) => handleUpdate(t._id, 'amount', value)}
                      type="number"
                      className="text-sm"
                    />
                    <span className="text-sm text-gray-500">
                      {new Date(t.date).toLocaleDateString()}
                    </span>
                  </div>
                  <Tag category={t.category} className="mt-1" />
                </div>
                <button 
                  onClick={() => handleDelete(t._id)}
                  className="text-red-500 hover:text-red-600 transition-colors px-2 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
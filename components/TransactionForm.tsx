'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const categories = ['Food', 'Transport', 'Shopping', 'Bills', 'Health', 'Entertainment'];

export default function TransactionForm({ onAdd, editingTransaction }: { onAdd: () => void, editingTransaction?: any }) {
  const [form, setForm] = useState(editingTransaction || { amount: '', description: '', date: '', category: categories[0] });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api', {
      method: editingTransaction ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        amount: Number(form.amount),
        date: new Date(form.date),
      }),
    });
    setForm({ amount: '', description: '', date: '', category: categories[0] });
    onAdd();
  }

  return (
    <Card>
      <CardContent className="space-y-2">
        <form onSubmit={handleSubmit} className="space-y-2">
          <input type="number" placeholder="Amount" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} className="border p-2 w-full rounded-md" required />
          <input type="text" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="border p-2 w-full rounded-md" required />
          <input type="date" value={form.date?.toString().slice(0, 10) || ''} onChange={e => setForm({ ...form, date: e.target.value })} className="border p-2 w-full rounded-md" required />
          <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="border p-2 w-full rounded-md">
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-indigo-700 transition">
            {editingTransaction ? 'Update Transaction' : 'Add Transaction'}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
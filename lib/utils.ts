export function groupByMonth(transactions: any[]) {
  const grouped: { [key: string]: number } = {};
  transactions.forEach((t) => {
    const month = new Date(t.date).toLocaleString('default', { month: 'short', year: 'numeric' });
    grouped[month] = (grouped[month] || 0) + t.amount;
  });
  return Object.entries(grouped).map(([month, total]) => ({ month, total }));
}

export function groupByCategory(transactions: any[]) {
  const grouped: { [key: string]: number } = {};
  transactions.forEach((t) => {
    grouped[t.category] = (grouped[t.category] || 0) + t.amount;
  });
  return Object.entries(grouped).map(([category, value]) => ({ category, value }));
}

export function calculateInsights(budgets: any[], transactions: any[]) {
  const insights = budgets.map((budget) => {
    const spent = transactions
      .filter((t) => t.category === budget.category && new Date(t.date).toLocaleString('default', { month: 'short', year: 'numeric' }) === budget.month)
      .reduce((acc, t) => acc + t.amount, 0);

    const percentage = Math.min(Math.round((spent / budget.amount) * 100), 100);
    const remaining = Math.max(budget.amount - spent, 0);
    
    return {
      category: budget.category,
      month: budget.month,
      budgeted: budget.amount,
      spent,
      remaining,
      percentage,
      status: spent > budget.amount ? 'Over Budget' : spent >= budget.amount * 0.9 ? 'Close to Limit' : 'Within Budget'
    };
  });

  return insights;
}

export function getCategoryColor(category: string) {
  const colors: Record<string, string> = {
    'Food': 'bg-amber-100 text-amber-800',
    'Transport': 'bg-blue-100 text-blue-800',
    'Housing': 'bg-green-100 text-green-800',
    'Entertainment': 'bg-purple-100 text-purple-800',
    'Shopping': 'bg-pink-100 text-pink-800',
    'Utilities': 'bg-indigo-100 text-indigo-800',
    'Other': 'bg-gray-100 text-gray-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
}
import { connectToDatabase } from '@/lib/db';
import Budget from '@/models/Budget';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  if (req.method === 'GET') {
    const budgets = await Budget.find();
    res.status(200).json(budgets);
  } else if (req.method === 'POST') {
    const budget = await Budget.create(req.body);
    res.status(201).json(budget);
  } else if (req.method === 'PUT') {
    const updated = await Budget.findByIdAndUpdate(req.body._id, req.body, { new: true });
    res.status(200).json(updated);
  } else if (req.method === 'DELETE') {
    await Budget.findByIdAndDelete(req.body._id);
    res.status(204).end();
  }
}
import { connectToDatabase } from '@/lib/db';
import { Transaction } from '@/models/Transaction';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'PUT') {
    const updated = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updated);
  } else if (req.method === 'DELETE') {
    await Transaction.findByIdAndDelete(id);
    res.status(204).end();
  }
}
import { connectToDatabase } from '@/lib/db';
import { Transaction } from '@/models/Transaction';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectToDatabase();

    switch (req.method) {
      case 'GET': {
        const transactions = await Transaction.find();
        return res.status(200).json(transactions);
      }

      case 'POST': {
        const { category, amount, date, description } = req.body;

        if (!category || !amount || !date || !description) {
          return res.status(400).json({ message: 'Missing required fields' });
        }

        const transaction = await Transaction.create({ category, amount, date, description });
        return res.status(201).json(transaction);
      }

      default:
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

  } catch (error) {
    console.error('API /transactions error:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
}

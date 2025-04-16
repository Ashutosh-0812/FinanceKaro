// === models/Transaction.ts ===
import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  category: { type: String, required: true },
  image: { type: String, required: false }
}, { timestamps: true });

// Check if model already exists before creating it
const TransactionModel = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);

export const Transaction = TransactionModel;
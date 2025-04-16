import mongoose, { Schema, Model, Document } from 'mongoose';

interface IBudget extends Document {
  category: string;
  amount: number;
  month: string;
  createdAt: Date;
  updatedAt: Date;
}

const BudgetSchema: Schema = new mongoose.Schema({
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  month: { type: String, required: true },
}, { timestamps: true });

type BudgetModel = Model<IBudget>;

const Budget: BudgetModel = 
  mongoose.models.Budget as BudgetModel || 
  mongoose.model<IBudget>('Budget', BudgetSchema);

export default Budget;
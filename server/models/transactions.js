import mongoose from 'mongoose';

const transactionsSchema = mongoose.Schema({
 amount: {
   type: Number,
   default: 0,
 },
 isoCurrencyCode: String,
 category: String,
 date: {
   type: Date,
   default: new Date(),
 },
 address: String,
 storeName: String,
 item: String,
});

export default mongoose.model("Transactions", transactionsSchema);
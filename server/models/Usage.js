// server/models/Usage.js
import mongoose from 'mongoose';

const usageSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  topicCount: { type: Number, default: 0 },
  month: { type: Number, required: true }, // e.g., 2 for February
  year: { type: Number, required: true }   // e.g., 2026
}, { timestamps: true });

const Usage = mongoose.model('Usage', usageSchema);
export default Usage;
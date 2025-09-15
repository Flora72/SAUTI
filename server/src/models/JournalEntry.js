import mongoose from 'mongoose';

const JournalEntrySchema = new mongoose.Schema(
  {
    title: { type: String, trim: true },
    content: { type: String, required: true },
    mood: { type: String, enum: ['soft', 'steady', 'strong', 'tender', 'numb', 'anxious', 'calm'], default: 'steady' },
    visibility: { type: String, enum: ['private', 'trusted', 'public'], default: 'private' },
    createdBy: { type: String, index: true }, // anonymous user/device id
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

JournalEntrySchema.index({ createdBy: 1, createdAt: -1 });

export default mongoose.models.JournalEntry || mongoose.model('JournalEntry', JournalEntrySchema);

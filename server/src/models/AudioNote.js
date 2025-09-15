import mongoose from 'mongoose';

const AudioNoteSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true },
    url: { type: String, required: true }, // In real app, use storage provider; here a placeholder
    durationSec: { type: Number, default: 0 },
    visibility: { type: String, enum: ['private', 'trusted', 'public'], default: 'private' },
    createdBy: { type: String, index: true },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

AudioNoteSchema.index({ createdBy: 1, createdAt: -1 });

export default mongoose.models.AudioNote || mongoose.model('AudioNote', AudioNoteSchema);

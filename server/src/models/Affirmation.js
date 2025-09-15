import mongoose from 'mongoose';

const AffirmationSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    author: { type: String, default: 'Anonymous' },
    theme: { type: String, enum: ['safety', 'strength', 'softness', 'reclamation', 'grounding'], default: 'grounding', index: true },
    curated: { type: Boolean, default: true },
    visibility: { type: String, enum: ['public'], default: 'public' },
    createdBy: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.models.Affirmation || mongoose.model('Affirmation', AffirmationSchema);

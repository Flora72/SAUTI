import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    createdBy: { type: String, required: true },
    status: { type: String, enum: ['visible', 'hidden'], default: 'visible' },
  },
  { timestamps: true }
);

const ThreadSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    createdBy: { type: String, required: true },
    closedAt: { type: Date, default: null },
    posts: [PostSchema],
    visibility: { type: String, enum: ['trusted', 'public'], default: 'trusted' },
    archivedAt: { type: Date, default: null },
    moderated: { type: Boolean, default: true },
  },
  { timestamps: true }
);

ThreadSchema.index({ createdAt: -1 });

export default mongoose.models.Thread || mongoose.model('Thread', ThreadSchema);

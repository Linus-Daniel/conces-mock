import mongoose, { Document, Model } from "mongoose";
export interface IGallery extends Document {
  title: string;
  description?: string;
  imageUrl: string; // Cloudinary URL
  event?: string; // e.g., "Thanksgiving Service"
  category?: "Service" | "Outreach" | "Retreat" | "Wedding" | "Other";
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
const gallerySchema = new mongoose.Schema<IGallery>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    imageUrl: { type: String, required: true },
    event: { type: String, trim: true },
    category: {
      type: String,
      enum: ["Service", "Outreach", "Retreat", "Wedding", "Other"],
    },
    tags: [{ type: String, trim: true }],
  },
  { timestamps: true }
);
const Gallery: Model<IGallery> =
  mongoose.models.Gallery || mongoose.model<IGallery>("Gallery", gallerySchema);
export default Gallery;

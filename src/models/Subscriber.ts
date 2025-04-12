import mongoose, { Schema, Document, Model } from "mongoose";

// Interface for the Subscriber document
export interface ISubscriber extends Document {
  name: string;
  email: string;
}

// Define schema
const SubscriberSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite in development
const Subscriber: Model<ISubscriber> =
  mongoose.models.Subscriber || mongoose.model<ISubscriber>("Subscriber", SubscriberSchema);

export default Subscriber;

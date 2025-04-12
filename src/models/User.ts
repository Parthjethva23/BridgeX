// models/User.ts

import mongoose, { Schema, models, model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// 👇 This is KEY: ensure correct typing of the model
const User = models.User as mongoose.Model<IUser> || model<IUser>('User', UserSchema);

export default User;

import mongoose from "mongoose";
// The schema for the User model
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures email is unique
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
    },
    role: {
      type: String,
      enum: ['Manager', 'Chef', 'Waiter', 'Cashier', 'Cleaner'], // Allow only these roles
      required: true
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the model
const User = mongoose.model('User', userSchema);

export default User;

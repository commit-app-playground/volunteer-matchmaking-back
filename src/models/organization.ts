import mongoose from 'mongoose';

const organizationSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true
  }
);

export default organizationSchema;
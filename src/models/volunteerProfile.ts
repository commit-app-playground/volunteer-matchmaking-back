import mongoose from 'mongoose';

const volunteerProfileSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    remoteOptions: {
        type: String,
        enum: ['REMOTEONLY','NOTREMOTE','OPENTOBOTH'],
        required: true
    },
    availableDays: {
        type: [String],
        enum: [
            'SUNDAY',
            'MONDAY',
            'TUESDAY',
            'WEDNESDAY',
            'THURSDAY',
            'FRIDAY',
            'SATURDAY'
        ]
    },
    interestedCauses: [String],
    skills: [String],
    availableHoursPerWeek: {
        type: Number
    }
  },
  {
    timestamps: true
  }
);

export default volunteerProfileSchema;
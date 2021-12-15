import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    organization: {type: mongoose.Schema.Types.ObjectId, ref: 'Organization'},
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
    causes: [String],
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    isRecurring: {
        type: Boolean,
        required: true
    },
    recurringDays: {
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
    requiredSkills: [String]
  },
  {
    timestamps: true
  }
);

export default projectSchema;
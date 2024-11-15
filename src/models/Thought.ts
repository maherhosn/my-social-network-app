import { Schema, model } from 'mongoose';
import Reaction from './Reaction.js';

interface IThought {
  thoughtText: string;
  createdAt: Date;
  userName: string;
  reactions: Response[];
}

// Schema to create Post model
const thoughtSchema = new Schema<IThought>(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userName: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `responses` that gets the amount of response per video
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Video model
const Thought = model('video', thoughtSchema);

export default Thought;

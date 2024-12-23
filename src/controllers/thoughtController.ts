import { Thought, User } from '../models/index.js';
import { Request, Response } from 'express';



//================================================================
//Functions called in the "/" directory
export const getThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
}

// create a new thought
export const createThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.create(req.body);
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { thoughts: thought._id } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        message: 'Thought created, but found no user with that ID',
      });
    }

    res.json(thought);
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  return;
}


//================================================================
//Functions called in the "/api/thoughts/:thoughtId" directory
export const getSingleThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.thoughtId })

    if (!thought) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }

    res.json(thought);
    return;
  } catch (err) {
    res.status(500).json(err);
  }

  return;
}

export const updateThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }

    res.json(thought);
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
}

export const deleteThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

    if (!thought) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }

    res.json({ message: 'Thought successfully deleted!' });

  } catch (err) {
    res.status(500).json(err);
  }

  return;
}



//================================================================
//Functions called in the "/api/thoughts/:thoughtId" directory
// Add a thought reactions
export const getThoughtReactions = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId).populate('reactions');

    if (!thought) {
      return res.status(404).json({ message: 'No thought found with this id!' });
    }

    res.json(thought.reactions);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
}

export const addThoughtReaction = async (req: Request, res: Response) => {
  try {
    // Validate that the required fields are present in the request body
    const { responseBody, username } = req.body;
    if (!responseBody || !username) {
      return res.status(400).json({ message: 'Reaction body and username are required!' });
    }

    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: { responseBody, username } } }, // Ensure you're adding a structured reaction object
      { runValidators: true, new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }

    res.json(thought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
}

//================================================================
//Functions called in the "/api/thoughts/:thoughtId/reactions/:reactionId" directory
// Remove thought response
export const removeThoughtResponse = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )

    if (!thought) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }

    res.json({message: 'The Reaction was removed.'});
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
}

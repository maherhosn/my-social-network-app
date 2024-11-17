import User from '../models/User.js';
import { Request, Response } from 'express';

// ================================================================
// Functions called in the root directory "/" or "/api/users"
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

// create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const dbUserData = await User.create(req.body);
    res.json(dbUserData);
  } catch (err) {

    res.status(500).json(err);
  }
}

//================================================================
//Functions called in the "/:userID" or "/api/users/:userID" directory
export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.params.userId })
      .select('-__v');

    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export const updateSingleUser = async (req: Request, res: Response) => {
  try {
    // Find the first document that matches the specified route parameter (name)
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId }, // Match the genre by id from the route parameter
      { username: req.body.username }, // Update the username with the value from the request body
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      res.status(404).json({ message: 'No user with that ID' });
    } else {
      res.json(updatedUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params.userId })
      .select('-__v');

    if (!deletedUser) {
      res.status(404).json({ message: 'No user with that ID' });
    } else {
      res.json({message: "User and associated thoughts of the below has been deleted" +deletedUser});
    }
  } catch (err) {
    res.status(500).json(err);
  }
}
//=========================================================
// //api/users/:userId/friends/:friendId
// Add a friend to a user's friend list
export const addFriend = async (req: Request, res: Response) => {
  try {
    const friend = await User.findById(req.params.friendId);
    if (friend) {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: friend._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Friend Added, but found no user with that ID',
        });
      }
      res.json('Added a new friend 🎉');
    }
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  return;
};

// Remove a friend from a user's friend list
export const removeFriend = async (req: Request, res: Response) => {
  try {
    const friend = await User.findById(req.params.friendId);
    if (friend) {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: friend._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Friend removed, but found no user with that ID',
        });
      }
      res.json('Removed friend from your list');
    }
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  return;
};
import { Router } from 'express';
const router = Router();
import { getUsers, getSingleUser, createUser, updateSingleUser, deleteSingleUser, addFriend, removeFriend } from '../../controllers/userController.js';

// /api/users
router.route('/api/users')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
router.route('/api/users/:userId')
    .get(getSingleUser)
    .put(updateSingleUser)
    .delete(deleteSingleUser);

// //api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

export default router;

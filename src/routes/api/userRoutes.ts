import { Router } from 'express';
const router = Router();
import { getUsers, getSingleUser, createUser, updateSingleUser, deleteSingleUser, addFriend, removeFriend } from '../../controllers/userController.js';

// /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateSingleUser)
    .delete(deleteSingleUser);

// //api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

export default router;

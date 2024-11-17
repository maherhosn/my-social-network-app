import { Router } from 'express';
const router = Router();
import { getThoughts, getSingleThought, createThought, updateThought, deleteThought, getThoughtReactions, addThoughtReaction, removeThoughtResponse } from '../../controllers/thoughtController.js';

// /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .get(getThoughtReactions)
  .post(addThoughtReaction);

// /api/thoughts/:thoughtId/reactions/:reactionID
router.route('/:thoughtId/reactions/:reactionID')
  .delete(removeThoughtResponse);

export default router;

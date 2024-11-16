import { Router } from 'express';
const router = Router();
import { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addThoughtReaction, removeThoughtResponse } from '../../controllers/thoughtController.js';

// /api/thoughts
router.route('/api/thoughts')
  .get(getThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/api/thoughts/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/api/thoughts/:thoughtId/reactions')
  .post(addThoughtReaction);

// /api/thoughts/:thoughtId/reactions/:reactionID
router.route('/api/thoughts/:thoughtId/reactions/:reactionID')
  .delete(removeThoughtResponse);

export default router;

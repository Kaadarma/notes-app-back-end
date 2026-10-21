import express from 'express';
import {
  createNote,
  getNotes,
  getNoteById,
  editNoteById,
  deleteNoteById,
} from './controller.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Notes API Server is running. Gunakan web frontend di https://notesapp-v1.dicodingacademy.com untuk mengelola catatan.',
  });
});

router.post('/notes', createNote);
router.post('/notes/notes', createNote);

router.get('/notes', getNotes);
router.get('/notes/notes', getNotes);

router.get('/notes/:id', getNoteById);
router.get('/notes/notes/:id', getNoteById);

router.put('/notes/:id', editNoteById);
router.put('/notes/notes/:id', editNoteById);

router.delete('/notes/:id', deleteNoteById);
router.delete('/notes/notes/:id', deleteNoteById);

export default router;

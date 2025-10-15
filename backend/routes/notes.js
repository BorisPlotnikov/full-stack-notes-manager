// backend/routes/notes.js

import express from 'express';

import getNotes from '../controllers/getNotes.js';
import createNote from '../controllers/createNote.js';
import updateNote from '../controllers/updateNote.js';
import deleteNote from '../controllers/deleteNote.js';
const router = express.Router();

router.get('/', getNotes);
router.post('/', createNote);
router.put('/:noteId', updateNote);
router.delete('/:noteId', deleteNote);

export default router;


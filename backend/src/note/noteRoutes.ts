import express from 'express';
import { createNote, listNotes, listNote, deleteNote, updateNote } from './noteController';
const noteRoutes = express.Router();

import {multer, storage} from '../middlewares/multerMiddleware'
const upload = multer({storage:storage})

noteRoutes.route('/')
.post(upload.single('file'),createNote)
.get(listNotes);

noteRoutes.route('/:id')
.get(listNote)
.delete(deleteNote)
.patch(updateNote);

export default noteRoutes;
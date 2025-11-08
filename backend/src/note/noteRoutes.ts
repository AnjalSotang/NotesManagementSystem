import express from 'express';
import { createNote, listNotes, listNote, deleteNote } from './noteController';
const noteRoutes = express.Router();

import {multer, storage} from '../middlewares/multerMiddleware'
const upload = multer({storage:storage})

noteRoutes.route('/').post(upload.single('file'),createNote);
noteRoutes.route('/').get(listNotes);
noteRoutes.route('/:id').get(listNote);
noteRoutes.route('/:id').delete(deleteNote);

export default noteRoutes;
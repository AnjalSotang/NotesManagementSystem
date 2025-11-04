import express from 'express';
import { createNote } from './noteController';

const noteRoutes = express.Router();

noteRoutes.route('/').post(createNote);

export default noteRoutes;
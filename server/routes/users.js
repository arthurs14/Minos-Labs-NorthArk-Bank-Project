import express from 'express';
import { getUsers, getUserById } from '../controllers/users.js';

const router = express.Router();

// get users
router.get('/', getUsers);

// get user by id
router.get('/:id', getUserById);

export default router;
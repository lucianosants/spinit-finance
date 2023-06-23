import { Router } from 'express';
import { userRoutes } from './user.';

const router = Router();

router.post('/user', userRoutes);

export { router };

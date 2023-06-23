import { Router } from 'express';

import { createUser, getAllUsers } from './user';
import { getAllIncomes, createIncome } from './incomes';

const router = Router();

router.post('/user', createUser);
router.get('/users', getAllUsers);

router.get('/incomes', getAllIncomes);
router.post('/incomes', createIncome);

export { router };

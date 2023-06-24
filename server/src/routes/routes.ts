import { Router } from 'express';

import { createUser, getAllUsers } from './user';
import { getAllIncomes, createIncome } from './incomes';
import { createExpense, getAllExpenses } from './expenses';

const router = Router();

router.post('/user', createUser);
router.get('/users', getAllUsers);

router.get('/incomes', getAllIncomes);
router.post('/incomes', createIncome);

router.get('/expenses', getAllExpenses);
router.post('/expenses', createExpense);

export { router };

import { Router } from 'express';

import { createUser, getAllUsers, updateUser } from './user';
import {
	getAllIncomes,
	createIncome,
	updateIncome,
	deleteIncome,
	getAnIncome,
} from './incomes';
import {
	createExpense,
	deleteExpense,
	getAllExpenses,
	updateExpense,
} from './expenses';

const router = Router();

router.post('/user', createUser);
router.get('/users', getAllUsers);
router.patch('/users/:id', updateUser);

router.get('/incomes', getAllIncomes);
router.post('/incomes', createIncome);
router.patch('/incomes/:id', updateIncome);
router.delete('/incomes/:id', deleteIncome);
router.get('/incomes/:id', getAnIncome);

router.get('/expenses', getAllExpenses);
router.post('/expenses', createExpense);
router.patch('/expenses/:id', updateExpense);
router.delete('/expenses/:id', deleteExpense);

export { router };

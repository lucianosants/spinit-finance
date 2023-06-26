import { Router } from 'express';

import {
	createUser,
	getAllUsers,
	updateUser,
} from '../controllers/user-controller';

import {
	getAllIncomes,
	createIncome,
	updateIncome,
	deleteIncome,
	getAnIncome,
} from '../controllers/incomes-controller';

import {
	createExpense,
	deleteExpense,
	getAllExpenses,
	getAnExpense,
	updateExpense,
} from '../controllers/expenses-controller';

const router = Router();

router.post('/users', createUser);
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
router.get('/expenses/:id', getAnExpense);

export { router };

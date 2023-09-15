import { Router } from 'express';

import { createUser, getAUser } from '../controllers/user-controller';

import {
	createIncome,
	updateIncome,
	deleteIncome,
	getAllIncomesByUserId,
} from '../controllers/incomes-controller';

import {
	createExpense,
	deleteExpense,
	getAllExpensesByUserId,
	updateExpense,
} from '../controllers/expenses-controller';

import { login } from '../controllers/auth-controller';

import { authenticateMiddleware } from '../middlewares/auth';

const router = Router();

router.post('/users', createUser);

router.get('/users/:id', authenticateMiddleware, getAUser);

router.post('/incomes', authenticateMiddleware, createIncome);
router.patch('/incomes/:id', authenticateMiddleware, updateIncome);
router.delete('/incomes/:id', authenticateMiddleware, deleteIncome);

router.get(
	'/incomes/users/:userId',
	authenticateMiddleware,
	getAllIncomesByUserId
);

router.post('/expenses', authenticateMiddleware, createExpense);
router.patch('/expenses/:id', authenticateMiddleware, updateExpense);
router.delete('/expenses/:id', authenticateMiddleware, deleteExpense);

router.get(
	'/expenses/users/:userId',
	authenticateMiddleware,
	getAllExpensesByUserId
);

router.post('/auth/login', login);

export { router };

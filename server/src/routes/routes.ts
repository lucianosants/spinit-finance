import { Router } from 'express';

import {
	createUser,
	getAllUsers,
	updateUser,
	getAUser,
} from '../controllers/user-controller';

import {
	getAllIncomes,
	createIncome,
	updateIncome,
	deleteIncome,
	getAnIncome,
	getAllIncomesByUserId,
} from '../controllers/incomes-controller';

import {
	createExpense,
	deleteExpense,
	getAllExpenses,
	getAllExpensesByUserId,
	getAnExpense,
	updateExpense,
} from '../controllers/expenses-controller';

import { login } from '../controllers/auth-controller';

import { authenticateMiddleware } from '../middlewares/auth';

const router = Router();

router.post('/users', createUser);
router.get('/users', getAllUsers);
router.patch('/users/edit/:id', updateUser);
router.get('/users/:id', authenticateMiddleware, getAUser);

router.get('/incomes', getAllIncomes);
router.post('/incomes', authenticateMiddleware, createIncome);

router.patch('/incomes/:id', authenticateMiddleware, updateIncome);
router.delete('/incomes/:id', authenticateMiddleware, deleteIncome);
router.get('/incomes/:id', getAnIncome);
router.get(
	'/incomes/users/:userId',
	authenticateMiddleware,
	getAllIncomesByUserId
);

router.get('/expenses', getAllExpenses);
router.post('/expenses', authenticateMiddleware, createExpense);
router.patch('/expenses/:id', authenticateMiddleware, updateExpense);
router.delete('/expenses/:id', authenticateMiddleware, deleteExpense);
router.get('/expenses/:id', getAnExpense);
router.get(
	'/expenses/users/:userId',
	authenticateMiddleware,
	getAllExpensesByUserId
);

router.post('/auth/login', login);

export { router };

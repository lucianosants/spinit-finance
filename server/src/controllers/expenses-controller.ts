import { Request, Response } from 'express';
import z from 'zod';

import { client } from '../lib/client';

async function createExpense(req: Request, res: Response) {
	try {
		const bodySchema = z.object({
			amount: z.number(),
			description: z.string(),
			payment_method: z.enum(['CASH', 'CREDIT_CARD']),
			installment: z.number(),
			date: z.string(),
			user: z.object({
				id: z.string(),
			}),
		});

		const {
			amount,
			description,
			payment_method,
			installment,
			date,
			user: { id },
		} = bodySchema.parse(req.body);

		const expense = await client.expense.create({
			data: {
				amount,
				description,
				payment_method,
				installment,
				date,
				user: {
					connect: {
						id,
					},
				},
			},
		});

		return res.status(200).json(expense);
	} catch (error) {
		res.status(400).send(error);
	}
}

async function updateExpense(req: Request, res: Response) {
	try {
		const bodySchema = z.object({
			amount: z.number(),
			description: z.string(),
			payment_method: z.enum(['CASH', 'CREDIT_CARD']),
			installment: z.number(),
			date: z.string().optional(),
		});

		const { id } = req.params;

		const { amount, description, payment_method, installment, date } =
			bodySchema.parse(req.body);

		const expense = await client.expense.update({
			data: {
				amount,
				description,
				payment_method,
				installment,
				date,
			},
			where: {
				id,
			},
		});

		return res.status(200).json(expense);
	} catch (error) {
		res.status(400).send(error);
	}
}

async function deleteExpense(req: Request, res: Response) {
	try {
		const { id } = req.params;

		const expense = await client.expense.delete({
			where: {
				id,
			},
		});

		return res.status(200).json(expense);
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getAllExpensesByUserId(req: Request, res: Response) {
	try {
		const { userId } = req.params;
		const expenses = await client.expense.findMany({
			where: {
				userId,
			},
			orderBy: {
				date: 'desc',
			},
		});

		return res.status(200).json(expenses);
	} catch (error) {
		res.status(400).send(error);
	}
}

export { createExpense, updateExpense, deleteExpense, getAllExpensesByUserId };

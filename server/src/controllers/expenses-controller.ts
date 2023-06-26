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
			user: z.object({
				id: z.string(),
			}),
		});

		const {
			amount,
			description,
			payment_method,
			installment,
			user: { id },
		} = bodySchema.parse(req.body);

		const income = await client.expense.create({
			data: {
				amount,
				description,
				payment_method,
				installment,
				user: {
					connect: {
						id,
					},
				},
			},
		});

		return res.status(200).json(income);
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getAllExpenses(req: Request, res: Response) {
	try {
		const income = await client.expense.findMany();

		return res.status(200).json(income);
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
		});

		const { id } = req.params;

		const { amount, description, payment_method, installment } =
			bodySchema.parse(req.body);

		const income = await client.expense.update({
			data: {
				amount,
				description,
				payment_method,
				installment,
			},
			where: {
				id,
			},
		});

		return res.status(200).json(income);
	} catch (error) {
		res.status(400).send(error);
	}
}

async function deleteExpense(req: Request, res: Response) {
	try {
		const { id } = req.params;

		const income = await client.expense.delete({
			where: {
				id,
			},
		});

		return res.status(200).json(income);
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getAnExpense(req: Request, res: Response) {
	try {
		const { id } = req.params;

		const income = await client.expense.findUnique({
			where: {
				id,
			},
		});

		return res.status(200).json(income);
	} catch (error) {
		res.status(400).send(error);
	}
}

export {
	createExpense,
	getAllExpenses,
	updateExpense,
	deleteExpense,
	getAnExpense,
};

import { Request, Response } from 'express';
import z from 'zod';

import { client } from '../lib/client';

async function createIncome(req: Request, res: Response) {
	try {
		const bodySchema = z.object({
			amount: z.number(),
			description: z.string(),
			date: z.string(),
			user: z.object({
				id: z.string(),
			}),
		});

		const {
			amount,
			description,
			date,
			user: { id },
		} = bodySchema.parse(req.body);

		const income = await client.income.create({
			data: {
				amount,
				description,
				date,
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

async function updateIncome(req: Request, res: Response) {
	try {
		const bodySchema = z.object({
			amount: z.number(),
			description: z.string(),
			date: z.string().optional(),
		});

		const { amount, description, date } = bodySchema.parse(req.body);

		const { id } = req.params;

		const income = await client.income.update({
			where: {
				id,
			},
			data: {
				amount,
				description,
				date,
			},
		});

		return res.status(200).json(income);
	} catch (error) {
		res.status(400).send(error);
	}
}

async function deleteIncome(req: Request, res: Response) {
	try {
		const { id } = req.params;

		const income = await client.income.delete({
			where: {
				id,
			},
		});

		return res.status(200).json(income);
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getAllIncomesByUserId(req: Request, res: Response) {
	try {
		const { userId } = req.params;

		const income = await client.income.findMany({
			where: {
				userId,
			},
			orderBy: {
				date: 'desc',
			},
		});

		return res.status(200).json(income);
	} catch (error) {
		res.status(400).send(error);
	}
}

export { createIncome, updateIncome, deleteIncome, getAllIncomesByUserId };

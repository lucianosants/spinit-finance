import { Request, Response } from 'express';
import z from 'zod';

import { client } from '../lib/client';

async function createIncome(req: Request, res: Response) {
	const bodySchema = z.object({
		amount: z.number(),
		description: z.string(),
		user: z.object({
			id: z.string(),
		}),
	});

	const {
		amount,
		description,
		user: { id },
	} = bodySchema.parse(req.body);

	const income = await client.income.create({
		data: {
			amount,
			description,
			user: {
				connect: {
					id,
				},
			},
		},
	});

	return res.status(200).json(income);
}

async function getAllIncomes(req: Request, res: Response) {
	const income = await client.income.findMany();

	return res.status(200).json(income);
}

async function updateIncome(req: Request, res: Response) {
	const bodySchema = z.object({
		amount: z.number(),
		description: z.string(),
	});

	const { amount, description } = bodySchema.parse(req.body);

	const { id } = req.params;

	const income = await client.income.update({
		where: {
			id,
		},
		data: {
			amount,
			description,
		},
	});

	return res.status(200).json(income);
}

async function deleteIncome(req: Request, res: Response) {
	const { id } = req.params;

	const income = await client.income.delete({
		where: {
			id,
		},
	});

	return res.status(200).json(income);
}

async function getAnIncome(req: Request, res: Response) {
	const { id } = req.params;

	const income = await client.income.findUnique({
		where: {
			id,
		},
	});

	return res.status(200).json(income);
}

export { createIncome, getAllIncomes, updateIncome, deleteIncome, getAnIncome };

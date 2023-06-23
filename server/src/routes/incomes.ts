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

export { createIncome, getAllIncomes };

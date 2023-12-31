import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import z from 'zod';

import { client } from '../lib/client';

async function createUser(req: Request, res: Response) {
	try {
		const bodySchema = z.object({
			first_name: z.string(),
			last_name: z.string(),
			username: z.string(),
			email: z.string().email(),
			password: z.string(),
		});

		const userData = bodySchema.parse(req.body);

		const existingUser = await client.user.findUnique({
			where: {
				username: userData.username,
			},
		});

		if (existingUser) {
			return res.status(400).json({ error: 'Username já existe.' });
		}

		const existingEmail = await client.user.findUnique({
			where: {
				email: userData.email,
			},
		});

		if (existingEmail) {
			return res.status(400).json({ error: 'Email já existe.' });
		}

		const hashedPassword = await hash(userData.password, 8);

		const user = await client.user.create({
			data: {
				...userData,
				password: hashedPassword,
			},
		});

		return res.status(200).json(user);
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getAUser(req: Request, res: Response) {
	try {
		const paramsSchema = z.object({
			id: z.string(),
		});

		const { id } = paramsSchema.parse(req.params);
		const query = req.query;

		let take = Number(query.take);
		let skipValue = Number(query.skip);

		const user = await client.user.findUnique({
			where: {
				id,
			},
			include: {
				incomes: {
					where: {
						userId: id,
					},
					orderBy: {
						date: 'desc',
					},
					take: take,
					skip: skipValue,
				},
				expenses: {
					where: {
						userId: id,
					},
					orderBy: {
						date: 'desc',
					},
					take: take,
					skip: skipValue,
				},
			},
		});

		const mappedUser = {
			id: user?.id,
			first_name: user?.first_name,
			incomes: user?.incomes,
			expenses: user?.expenses,
			userName: user?.username,
		};

		return res.status(200).json(mappedUser);
	} catch (error) {
		res.status(400).send(error);
	}
}

export { createUser, getAUser };

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

async function getAllUsers(req: Request, res: Response) {
	try {
		const users = await client.user.findMany();

		return res.status(200).json(users);
	} catch (error) {
		res.status(400).send(error);
	}
}

async function updateUser(req: Request, res: Response) {
	try {
		const bodySchema = z.object({
			first_name: z.string(),
			last_name: z.string(),
			username: z.string(),
		});

		const { id } = req.params;

		const userData = bodySchema.parse(req.body);

		const user = await client.user.update({
			where: {
				id,
			},
			data: {
				...userData,
			},
		});

		return res.status(200).json(user);
	} catch (error) {
		res.status(400).send(error);
	}
}

export { createUser, getAllUsers, updateUser };

import { Request, Response } from 'express';
import z from 'zod';

import { compare } from 'bcryptjs';

import { sign } from 'jsonwebtoken';

import { client } from '../lib/client';

async function login(req: Request, res: Response) {
	try {
		const bodySchema = z.object({
			email: z.string().email(),
			password: z.string(),
		});

		const { email, password } = bodySchema.parse(req.body);

		const user = await client.user.findUnique({
			where: { email },
		});

		if (!user) {
			return res.status(404).send({ error: 'User not found' });
		}

		const comparedPassword = await compare(password, user!.password);

		if (!comparedPassword) {
			return res.status(400).send({ error: 'Invalid Password' });
		}

		const secretKey = process.env.SECRET_HASH_TOKEN as string;

		const token = sign({ id: user!.id, username: user.username  }, secretKey, {
			expiresIn: '7d',
		});

		console.log(token)

		const { id, username, first_name } = user;

		return res
			.status(200)
			.json({ user: { id, username, email, first_name }, token });
	} catch (error) {
		res.status(400).send(error);
	}
}

export { login };

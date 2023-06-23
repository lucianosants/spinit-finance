import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import z from 'zod';

import { client } from '../lib/client';

async function userRoutes(req: Request, res: Response) {
	const bodySchema = z.object({
		first_name: z.string(),
		last_name: z.string(),
		username: z.string(),
		email: z.string().email(),
		password: z.string(),
	});

	const userData = bodySchema.parse(req.body);

	const hashedPassword = await hash(userData.password, 8);

	const user = await client.user.create({
		data: {
			...userData,
			password: hashedPassword,
		},
	});

	return res.status(200).json(user);
}

export { userRoutes };

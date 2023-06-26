import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import z from 'zod';

import { client } from '../lib/client';

async function createUser(req: Request, res: Response) {
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

async function getAllUsers(req: Request, res: Response) {
	const users = await client.user.findMany({
		include: {
			incomes: true,
			expenses: true,
		},
	});

	const mappedUsers: UserProps[] = users.map((user) => {
		const {
			id,
			first_name,
			last_name,
			username,
			email,
			incomes,
			expenses,
			balance,
		} = user;

		const mappedIncomes = {
			incomes: incomes.map((income) => {
				const { id, userId, amount, description, date } = income;

				return {
					id,
					userId,
					amount,
					description,
					date,
				};
			}),
		};

		const mappedExpenses = {
			expenses: expenses.map((expense) => {
				const {
					id,
					userId,
					amount,
					description,
					date,
					payment_method,
					installment,
				} = expense;

				return {
					id,
					userId,
					amount,
					description,
					date,
					payment_method,
					installment,
				};
			}),
		};

		const currentBalance = () => {
			const totalIncomes = incomes.reduce(
				(acc, { amount }) => acc + amount,
				0
			);
			const totalExpenses = expenses.reduce(
				(acc, { amount }) => acc + amount,
				0
			);

			return totalIncomes - totalExpenses;
		};

		const userData = {
			id,
			first_name,
			last_name,
			username,
			email,
			balance: currentBalance(),
			...mappedIncomes,
			...mappedExpenses,
		};

		return userData;
	});

	return res.status(200).json(mappedUsers);
}

async function updateUser(req: Request, res: Response) {
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
}

export { createUser, getAllUsers, updateUser };

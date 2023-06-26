type IncomeProps = {
	id: string;
	userId: string;
	amount: number;
	description: string;
	date: Date;
};

type PaymentMethodProps = 'CASH' | 'CREDIT_CARD';

type ExpenseProps = {
	id: string;
	userId: string;
	amount: number;
	description: string;
	date: Date;
	payment_method: PaymentMethodProps;
	installment: number | null;
};

type UserProps = {
	id: string;
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	incomes: IncomeProps[];
	expenses: ExpenseProps[];
	balance: number;
};

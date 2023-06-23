type IncomeProps = {
	id: string;
	userId: string;
	amount: number;
	description: string;
	date: Date;
};

type UserProps = {
	id: string;
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	incomes: IncomeProps[];
};

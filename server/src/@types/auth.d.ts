declare namespace Express {
	export type Request = {
		userId: string;
	};
}

type TokenPayload = {
	id: string;
	iat: number;
	exp: number;
};

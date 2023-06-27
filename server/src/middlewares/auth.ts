import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export function authenticateMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { authorization } = req.headers;

	try {
		if (!authorization) {
			return res.status(401).json({ error: 'Token not provided.' });
		}

		const [scheme, token] = authorization.split(' ');

		if (!/^Bearer$/i.test(scheme)) {
			return res.status(401).json({ error: 'Token is not Bearer type.' });
		}

		const secretKey = process.env.SECRET_HASH_TOKEN as string;

		verify(token, secretKey, (error, decoded) => {
			if (error) {
				return res
					.status(401)
					.json({ error: 'Invalid authentication token.' });
			}

			const payload = decoded as TokenPayload;
			req.userId = payload.id;

			return next();
		});
	} catch (error) {
		return res.status(401).json({ error: 'Invalid token' });
	}
}

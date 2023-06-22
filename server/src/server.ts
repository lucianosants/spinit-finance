import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', async (req, res) => {
	res.json({ message: 'Hello World!!' });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () =>
	console.log(`Server running in http://localhost:${PORT}`)
);

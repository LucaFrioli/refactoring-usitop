/* eslint-disable */
import express from 'express';
import enviarEmail from '../services/email.js';

const router = express.Router();

router.post('/', async (req, res) => {
	try {
		enviarEmail(req.body);
		res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
	} catch (error) {
		console.error('Erro ao enviar:', error);
		res.status(500).json({ error: 'Erro ao enviar mensagem' });
	}
});

export default router;
/* eslint-enable */
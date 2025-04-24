import nodemailer from 'nodemailer';

export async function enviarEmail(body) {
	const { Nome, Email, Celular, Mensagem } = body;

	const transporter = nodemailer.createTransport({
		host: process.env.HOST,
		port: process.env.PORT,
		auth: {
			user: process.env.USER,
			pass: process.env.PASS,
		},
	});

	await transporter.sendMail({
		from: `"Formulário do site" <${process.env.USER}>`,
		to: process.env.DEST,
		subject: 'Contato via Website Usitop',
		html: `
	<h3>Nova mensagem recebida:</h3>
	<p><strong>Nome:</strong> ${Nome}</p>
	<p><strong>Email:</strong> ${Email}</p>
	<p><strong>Celular:</strong> ${Celular || 'Não informado'}</p>
	<p><strong>Mensagem:</strong><br>${Mensagem}</p>
	`,
	});
};

export default enviarEmail;
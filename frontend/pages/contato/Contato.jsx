import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';
import { useState } from 'react';
import axios from 'axios';

function Contato() {
	const [formData, setFormData] = useState({
		Nome: '',
		Email: '',
		Celular: '',
		Mensagem: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.post(
				'/api/contato',
				{
					Nome: formData.Nome,
					Email: formData.Email,
					Celular: formData.Celular,
					Mensagem: formData.Mensagem
				}
			);
			alert('Mensagem enviada com sucesso!');
		} catch (err) {
			alert(`Erro ao enviar. Tente novamente mais tarde. ${err}`);
		}
	};

	return (
		<>
			<Header />

			<div className="container-fluid my-5">
				<div className="row mb-3 justify-content-center">
					<div className="col-lg-5 text-center my-5">
						<h1>
							<strong>Entre em contato com a gente!</strong>
						</h1>
						<p className="mt-3">
							Caso tenha alguma dúvida a respeito da nossa
							empresa, ou gostaria de iniciar um projeto conosco,
							ficamos a disposição para atendê-lo via Email.
							<br />
							Nossa equipe especializada irá te dar o suporte e
							atendimento desejado.
							<br />
							Fale conosco!
						</p>
					</div>
				</div>

				<hr className="col-md-6 offset-md-3 mb-5" />

				<div className="row justify-content-center">
					{/* <%- include('includes/messages') -%>*/}
				</div>

				<div className="row mt-3 justify-content-center">
					<div className="col-xl-6 col-md-8 col-10 text-start">
						<form
							method="post"
							onSubmit={handleSubmit}
							className="form-group contactForm my-5"
						>
							<div className="row justify-content-center">
								<div className="col-12 mb-3">
									<label
										className="form-label"
									>
										<strong>Nome:</strong>
									</label>
									<input
										type="text"
										className="form-control validation"
										id="nome"
										name="Nome"
										placeholder="Nome"
										value={formData.Nome}
  										onChange={handleChange}
									/>
								</div>

								<div className="col-12 col-lg-6 col-md-7 mb-3">
									<label
										className="form-label"
									>
										<strong>Email:</strong>
									</label>
									<input
										type="email"
										className="form-control validation"
										id="email"
										name="Email"
										placeholder="Seu email"
										value={formData.Email}
  										onChange={handleChange}
									/>
								</div>

								<div className="col-12 col-lg-6 col-md-5 mb-3">
									<label
										className="form-label"
									>
										<strong>Número de contato:</strong>
									</label>
									<input
										type="tel"
										maxLength={15}
										className="form-control validation"
										id="telefone"
										name="Celular"
										placeholder="(00) 00000-0000"
										value={formData.Celular}
  										onChange={handleChange}
									/>
								</div>

								<div className="col-12">
									<label
										className="form-label"
									>
										<strong>Mensagem:</strong>
									</label>
									<textarea
										className="form-control validation col-12"
										id="message"
										name="Mensagem"
										placeholder="Insira aqui sua mensagem ..."
										style={{ height: '150px' }}
										value={formData.Mensagem}
  										onChange={handleChange}
									></textarea>
								</div>
							</div>
							<button
								type="submit"
								className="btn mt-3 btn-success"
								style={{ width: '100%' }}
								id="enviarFormContato"
							>
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Contato;

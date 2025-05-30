import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';

function Contato() {
	const action = import.meta.env.VITE_EMAIL_CONSUME;
	const endereco = import.meta.env.VITE_ADDRESS;
	return (
		<>
			<Header />
			{/* <div id="alert-contato" style="display: none"></div> */}

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
							action={action}
							className="form-group contactForm my-5"
						>
							<div className="row justify-content-center">
								<div className="col-12 mb-3">
									<label
										className="form-label"
										htmlFor="Nome"
									>
										<strong>Nome:</strong>
									</label>
									<input
										type="text"
										className="form-control validation"
										id="nome"
										name="Nome"
										placeholder="Nome"
									/>
								</div>

								<div className="col-12 col-lg-6 col-md-7 mb-3">
									<label
										className="form-label"
										htmlFor="Email"
									>
										<strong>Email:</strong>
									</label>
									<input
										type="email"
										className="form-control validation"
										id="email"
										name="Email"
										placeholder="Seu email"
									/>
								</div>

								<div className="col-12 col-lg-6 col-md-5 mb-3">
									<label
										className="form-label"
										htmlFor="Celular"
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
									/>
								</div>

								<div className="col-12">
									<label
										className="form-label"
										htmlFor="Menssagem"
									>
										<strong>Mensagem:</strong>
									</label>
									<textarea
										className="form-control validation col-12"
										id="message"
										name="Menssagem"
										placeholder="Insira aqui sua mensagem ..."
										style={{ height: '150px' }}
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
							<input
								type="hidden"
								name="_next"
								value={endereco}
							/>
							<input
								type="text"
								name="_honey"
								style={{ display: 'none' }}
							/>
						</form>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Contato;

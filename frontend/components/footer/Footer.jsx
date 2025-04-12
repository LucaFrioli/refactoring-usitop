import './Footer.css';

function Footer() {
	return (
		<>
			{/* FOOTER */}
			<footer className="mt-3 text-white">
				{/* TOP FOOTER */}
				<div className="container-fluid" id="top-footer">
					<div className="pt-0" id="bg-image">
						<div className="container">
							{/* Lista de acesso às páginas */}
							<ul className="list-group-flush pt-5">
								<li className="list-group-item">
									<a
										className="link-light link-underline-opacity-0 link-underline-opacity-75-hover"
										href="/"
									>
										<img
											src="./assets/icons/home_icon.svg"
											alt="Home"
											className="me-3"
										/>
										Página inicial
									</a>
								</li>
								<li className="list-group-item mt-3">
									<a
										className="link-light link-underline-opacity-0 link-underline-opacity-75-hover"
										href="/produtos"
									>
										<img
											src="./assets/icons/shopping_bag_icon.svg"
											alt="ícone de Produtos"
											className="me-3"
										/>
										Produtos
									</a>
								</li>
								<li className="list-group-item mt-3">
									<a
										className="link-light link-underline-opacity-0 link-underline-opacity-75-hover"
										href="/contato"
									>
										<img
											src="./assets/icons/telephone_icon.svg"
											alt="Telefone"
											className="me-3"
										/>
										Contatos
									</a>
								</li>
								<li className="list-group-item mt-3">
									<a
										className="link-light link-underline-opacity-0 link-underline-opacity-75-hover"
										href="/sobre"
									>
										<img
											src="./assets/icons/user_icon.svg"
											alt="Icone de Usuário"
											className="me-3"
										/>
										Sobre nós
									</a>
								</li>
							</ul>
							{/* Meios de contato */}
							<div className="row justify-content-evenly mt-5">
								<div className="col-md-3 col-12">
									<div className="row">
										<div className="col-3">
											<img
												src="./assets/icons/map_icon.svg"
												alt="Mapa"
												className="icon-45"
											/>
										</div>
										<div className="col-9">
											<h6>Endereço</h6>
											<p>Avenida 52, 1212 |</p>
											<p>CEP: 13504-070 |</p>
											<p>
												Jardim Portugal - Rio Claro, SP
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-12 my-3">
									<div className="row">
										<div className="col-3">
											<img
												src="./assets/icons/e-mail_icon.svg"
												alt="letter"
												className="icon-45"
											/>
										</div>
										<div className="col-9">
											<h6>Email</h6>
											<p>dpinheiro@usitop.com.br</p>
											<p>gpinheiro@usitop.com.br </p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-12">
									<div className="row">
										<div className="col-3">
											<img
												src="./assets/icons/cellphone_icon.svg"
												alt="cellphone"
												className="icon-45"
											/>
										</div>
										<div className="col-9">
											<h6>Fale Conosco</h6>
											<p>
												<img
													src="./assets/icons/phone_white_icon.svg"
													alt="Fone branco"
													className="icon-13"
												/>
												(19) 99696-2953
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* BOTTOM FOOTER */}
				<div className="container-fluid pt-5 pb-3" id="bottom-footer">
					<p className="smallest-footer-text text-center mb-0">
						©2023 - 2024. Usitop - Usinagem e Ferramentaria Ltda.
						<br />
						Todos os direitos reservados
					</p>
					<p className="text-center mt-3">
						Desenvolvido por <strong>Ark Web Creations</strong>
					</p>
				</div>
			</footer>

			<script src="./assets/js/bundle.js"></script>
		</>
	);
}

export default Footer;

import './Footer.css';

function Footer() {
	return (
		<>
			{/* FOOTER */}
			<footer class="mt-3 text-white">
				{/* TOP FOOTER */}
				<div class="container-fluid" id="top-footer">
					<div class="pt-0" id="bg-image">
						<div class="container">
							{/* Lista de acesso às páginas */}
							<ul class="list-group-flush pt-5">
								<li class="list-group-item">
									<a
										class="link-light link-underline-opacity-0 link-underline-opacity-75-hover"
										href="/"
									>
										<img
											src="./assets/icons/home_icon.svg"
											alt="Home"
											class="me-3"
										/>
										Página inicial
									</a>
								</li>
								<li class="list-group-item mt-3">
									<a
										class="link-light link-underline-opacity-0 link-underline-opacity-75-hover"
										href="/produtos"
									>
										<img
											src="./assets/icons/shopping_bag_icon.svg"
											alt="ícone de Produtos"
											class="me-3"
										/>
										Produtos
									</a>
								</li>
								<li class="list-group-item mt-3">
									<a
										class="link-light link-underline-opacity-0 link-underline-opacity-75-hover"
										href="/contato"
									>
										<img
											src="./assets/icons/telephone_icon.svg"
											alt="Telefone"
											class="me-3"
										/>
										Contatos
									</a>
								</li>
								<li class="list-group-item mt-3">
									<a
										class="link-light link-underline-opacity-0 link-underline-opacity-75-hover"
										href="/sobre"
									>
										<img
											src="./assets/icons/user_icon.svg"
											alt="Icone de Usuário"
											class="me-3"
										/>
										Sobre nós
									</a>
								</li>
							</ul>
							{/* Meios de contato */}
							<div class="row justify-content-evenly mt-5">
								<div class="col-md-3 col-12">
									<div class="row">
										<div class="col-3">
											<img
												src="./assets/icons/map_icon.svg"
												alt="Mapa"
												class="icon-45"
											/>
										</div>
										<div class="col-9">
											<h6>Endereço</h6>
											<p>Rua 1 a Jsp, 49 |</p>
											<p>CEP: 13503-015 |</p>
											<p>
												Jardim São Paulo - Rio Claro, SP
											</p>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-12 my-3">
									<div class="row">
										<div class="col-3">
											<img
												src="./assets/icons/e-mail_icon.svg"
												alt="letter"
												class="icon-45"
											/>
										</div>
										<div class="col-9">
											<h6>Email</h6>
											<p>wcastro@usitop.com.br</p>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-12">
									<div class="row">
										<div class="col-3">
											<img
												src="./assets/icons/cellphone_icon.svg"
												alt="cellphone"
												class="icon-45"
											/>
										</div>
										<div class="col-9">
											<h6>Fale Conosco</h6>
											<p>
												<img
													src="./assets/icons/phone_white_icon.svg"
													alt="Fone branco"
													class="icon-13 me-2"
												/>
												(19) 3557-8721
											</p>
											<p>
												<img
													src="./assets/icons/whatsapp_white_icon.svg"
													alt="Whatsapp branco"
													class="icon-13 me-2"
												/>
												(19) 98334-4584
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* BOTTOM FOOTER */}
				<div class="container-fluid pt-5 pb-3" id="bottom-footer">
					<p class="smallest-footer-text text-center mb-0">
						©2023 - 2024. Usitop - Usinagem e Ferramentaria Ltda.
						<br />
						Todos os direitos reservados
					</p>
					<p class="text-center mt-3">
						Desenvolvido por <strong>Ark Web Creations</strong>
					</p>
				</div>
			</footer>

			<script src="./assets/js/bundle.js"></script>
		</>
	);
}

export default Footer;

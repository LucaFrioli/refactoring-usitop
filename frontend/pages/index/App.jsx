import './App.css';
import Header from '../../components/header/header';
import Especialidades from '../../components/cards_servicos/especialidades';
import Footer from '../../components/footer/Footer';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		document.title = 'Usitop - Home';
	});

	return (
		<>
			<Header />
			{/* CORPO */}
			<div class="container-fluid px-0">
				<div class="position-relative overflow-hidden">
					<img
						src="./assets/img/homeBanner.png"
						class="w-100 vh-100 object-fit-cover"
						alt="Banner"
					/>
					<div class="position-absolute top-50 start-50 translate-middle text-center text-white px-3">
						<h1 class="display-3 fw-bold">
							Uma empresa pronta para suas necessidades
						</h1>
						<h5>
							Peças em série, moldes, matrizes e outros projetos
							de usinagem...
							<br />
							estamos prontos pra tudo!
						</h5>
					</div>
				</div>

				<div class="px-4 py-5 my-5 text-center">
					<img
						class="d-block mx-auto mb-4"
						src="./assets/img/icone_escuro_g.png"
						height="80"
					/>
					<h1 class="display-5 fw-bold text-body-emphasis montserrat">
						Sobre nós
					</h1>
					<div class="col-10 col-lg-6 mx-auto">
						<p class="lead mb-4">
							A Usitop é uma empresa comprometida em atender seus
							clientes com excelência, garantindo o melhor
							custo-benefício, a máxima qualidade nos serviços
							prestados e sempre respeitando os prazos.
						</p>
					</div>
				</div>

				<div class="py-5 mb-5 text-center" id="bg-container-green">
					<div class="container">
						<div class="row text-light">
							<div class="col-12 col-xl-6 mt-3 my-xl-3">
								<img
									class="d-block mx-auto mb-4"
									id="value"
									src="./assets/icons/value.svg"
									height="80"
								/>
								<h1 class="display-5 fw-bold montserrat">
									Nossos valores
								</h1>
								<div class="col-10 col-lg-8 mx-auto">
									<p class="mb-4">
										Nossas relações são baseadas em:
										qualidade, melhoria continua,
										comprometimento, transparência,
										confiança, cooperação, integridade,
										inovação e sustentabilidade.
									</p>
								</div>
							</div>
							<div class="col-12 col-xl-6 mt-5 my-xl-3">
								<img
									class="d-block mx-auto mb-4"
									src="./assets/icons/mission.svg"
									height="80"
								/>
								<h1 class="display-5 fw-bold montserrat">
									Nossa missão
								</h1>
								<div class="col-10 col-lg-8 mx-auto">
									<p class="mb-4">
										Satisfazer as necessidades do mercado
										com serviços e produtos de qualidade,
										destinados à usinagem e ferramentaria,
										garantindo rentabilidade e atuando
										sempre com respeito
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h1 class="text-center montserrat-700 mx-3">
					Nossas especialidades
				</h1>
				<div class="container my-5">
					<Especialidades></Especialidades>
				</div>
			</div>

			<div class="p-4 mt-5 text-right col-lg-6 w-100" id="hero-message">
				<h1
					class="display-5 fw-bold text-body-emphasis montserrat"
					id="text-color"
				>
					Precisa de uma solução?
					<br />
					Entre em contato!
				</h1>
				<form action="/contato" method="get">
					<button
						type="button submit"
						class="btn btn-lg w-50 my-3 col-12"
						id="btn-message"
					>
						Envie uma mensagem
					</button>
				</form>
			</div>
			<Footer />
		</>
	);
}

export default App;

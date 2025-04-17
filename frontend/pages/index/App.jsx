import './App.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/Footer';
import { useEffect } from 'react';
import useParallax from './useParalaxx';
import CardServicos from '../../components/cards_servicos/Cards_servicos';

function App() {
	useEffect(() => {
		document.title = 'Usitop - Home';
	});

	useParallax();

	return (
		<>
			<Header />
			{/* CORPO */}
			<div className="container-fluid px-0">
				<div className="position-relative overflow-hidden banner-parallax">
					<div className="parallax-wrapper">
						<img
							src="./assets/img/homeBanner.png"
							className="parallax-img"
							alt="Banner"
						/>
						<div className="gradient-overlay"></div>
					</div>

					<div className="banner-text-overlay text-white d-flex align-items-end justify-content-center text-center">
						<div className="content-wrapper">
							<h1 className="display-5 fw-bold">
								Uma empresa pronta para suas necessidades
							</h1>
							<h5>
								Peças em série, moldes, matrizes e outros
								projetos de usinagem...
								<br />
								estamos prontos pra tudo!
							</h5>
						</div>
					</div>
				</div>

				<div className="px-4 py-5 my-5 text-center">
					<img
						className="d-block mx-auto mb-4"
						src="./assets/img/icone_escuro_g.png"
						height="80"
					/>
					<h1 className="display-5 fw-bold text-body-emphasis montserrat">
						Sobre nós
					</h1>
					<div className="col-10 col-lg-6 mx-auto">
						<p className="lead mb-4">
							A Usitop é uma empresa comprometida em atender seus
							clientes com excelência, garantindo o melhor
							custo-benefício, a máxima qualidade nos serviços
							prestados e sempre respeitando os prazos.
						</p>
					</div>
				</div>

				<div className="py-5 mb-5 text-center" id="bg-container-green">
					<div className="container">
						<div className="row text-light">
							<div className="col-12 col-xl-6 mt-3 my-xl-3">
								<img
									className="d-block mx-auto mb-4"
									id="value"
									src="./assets/icons/value.svg"
									height="80"
								/>
								<h1 className="display-5 fw-bold montserrat">
									Nossos valores
								</h1>
								<div className="col-10 col-lg-8 mx-auto">
									<p className="mb-4">
										Nossas relações são baseadas em:
										qualidade, melhoria continua,
										comprometimento, transparência,
										confiança, cooperação, integridade,
										inovação e sustentabilidade.
									</p>
								</div>
							</div>
							<div className="col-12 col-xl-6 mt-5 my-xl-3">
								<img
									className="d-block mx-auto mb-4"
									src="./assets/icons/mission.svg"
									height="80"
								/>
								<h1 className="display-5 fw-bold montserrat">
									Nossa missão
								</h1>
								<div className="col-10 col-lg-8 mx-auto">
									<p className="mb-4">
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

				<h1 className="text-center montserrat-700 mx-3">
					Nossas especialidades
				</h1>
				<div className="container my-5">
					<div className="row d-flex justify-content-center">
						<CardServicos
							imgSrc="./assets/img/molde-compressao.jpg"
							imgAlt="Molde de Compressão"
							title="Moldes de Compressão"
							text="Desenvolvemos moldes de alta qualidade cuidando de cada etapa do processo."
						/>
						<CardServicos
							imgSrc="./assets/img/matriz_card2.jpeg"
							imgAlt="Matriz de Extrusão"
							title="Matriz de Extrusão"
							text="Matrizes de extrusão de borracha personalizadas e de alta precisão."
						/>
					</div>
					<div className="row my-3 d-flex justify-content-center">
						<CardServicos
							imgSrc="./assets/img/eletroerosao.jpeg"
							imgAlt="Eletro-erosão"
							title="Eletro-erosão"
							text="Corte de formas complexas e alta precisão."
						/>
						<CardServicos
							imgSrc="./assets/img/usinagem-em-serie.jpeg"
							imgAlt="Usinagem em Série"
							title="Usinagem em Série"
							text="Torneamento, fresamento, furação e muito mais."
						/>
					</div>
				</div>
			</div>

			<div
				className="p-4 mt-5 text-right col-lg-6 w-100"
				id="hero-message"
			>
				<h1
					className="display-5 fw-bold text-body-emphasis montserrat"
					id="text-color"
				>
					Precisa de uma solução?
					<br />
					Entre em contato!
				</h1>
				<a
					href="contato"
					type="button submit"
					className="btn btn-lg w-50 my-3 col-12"
					id="btn-message"
				>
					Envie uma mensagem
				</a>
			</div>
			<Footer />
		</>
	);
}

export default App;

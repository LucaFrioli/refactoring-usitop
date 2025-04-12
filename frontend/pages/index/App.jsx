import './App.css';
import Header from '../../components/header/header';
import Carousel from '../../components/card-carousel/Carousel';
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
			<div className="container-fluid px-0">
				{/* CAROUSEL */}
				<div id="carouselCaptions" className="carousel slide">
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselCaptions"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#carouselCaptions"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#carouselCaptions"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="./assets/img/molde3.jpeg"
								className="d-block w-100"
							/>
							<div className="carousel-caption d-none d-md-block montserrat">
								<h1 className="league-spartan display-3 fw-bold">
									Uma empresa pronta
									<br />
									para suas nescessidades
								</h1>
								<p>
									Peças em série, moldes, matrizes e outros
									projetos de usinagem...
									<br />
									estamos prontos pra tudo!
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="./assets/img/molde1.jpg"
								className="d-block w-100"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h1 className="league-spartan display-3 fw-bold">
									Moldes de compressão
									<br />
									unicavidade
								</h1>
								<p>
									Menos desperdício e mais precisão na sua
									produção!
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="./assets/img/molde2.jpg"
								className="d-block w-100"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h1 className="league-spartan display-3 fw-bold">
									Detalhes únicos que
									<br />
									transformam o produto
								</h1>
								<p>
									Compromisso com a qualidade e a precisão em
									nossos moldes de compressão!
								</p>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev prev-teste1"
						type="button"
						data-bs-target="#carouselCaptions"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next next-teste1"
						type="button"
						data-bs-target="#carouselCaptions"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>

				{/* HE1 - SOBRE NÓS -*/}
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
							A Usitop Usinagem e Ferramentaria é uma empresa
							experiente que está no mercado para atender seus
							clientes de maneira satisfatória, viabilizando o
							custo-benefício com a máxima qualidade nos serviços
							prestados.
						</p>
					</div>
				</div>

				{/* HderE 2 - MISSÃO E VALORES */}
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
										com serviços e produtos de qualidade e
										alta tecnologia, destinados a usinagem
										em geral, proporcionando rentabilidade e
										respeitando sempre o indivíduo, a
										sociedade e o meio ambiente.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* CARD CAROL -->*/}
				<h1 className="text-center montserrat-700 mx-3">
					Nossas especialidades
				</h1>
				<div className="container my-5">
					<Carousel></Carousel>
				</div>
			</div>

			{/* HERO MENSM -->*/}
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
				<form action="/contato" method="get">
					<button
						type="button submit"
						className="btn btn-lg w-50 my-3 col-12"
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

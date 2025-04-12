import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';

function Sobre() {
	return (
		<>
			<Header />

			<div className="row my-5 justify-content-center">
				<img
					className="col-lg-4 col-md-6 col-10"
					src="./assets/img/usitop-4.png"
					alt="Usitop Logo"
				/>
			</div>

			<div className="container-fluid my-5" id="sobre-container">
				<div className="row mb-5 mt-3 justify-content-center">
					<p className="lead col-lg-5 col-md-6 text-center">
						A Usitop é uma empresa comprometida em atender seus
						clientes com excelência, garantindo o melhor
						custo-benefício, a máxima qualidade nos serviços
						prestados e sempre respeitando os prazos.
					</p>
				</div>

				<hr className="col-md-6 offset-md-3" />

				<div className="row m-sm-5 justify-content-center">
					<img
						className="m-3"
						src="./assets/icons/mission_black.svg"
						alt="Alvo com uma flecha"
						id="sobre-icon"
					/>
					<div className="col-lg-8 col-xl-6 col-10">
						<h2>
							<strong>Missão</strong>
						</h2>
						<p className="lead">
							Satisfazer as necessidades do mercado com serviços e
							produtos de qualidade, destinados à usinagem e
							ferramentaria, garantindo rentabilidade e atuando
							sempre com respeito.
						</p>
					</div>
				</div>

				<div className="row m-sm-5 justify-content-center">
					<div className="col-lg-8 col-xl-6 col-10 text-end">
						<h2>
							<strong>Valores</strong>
						</h2>
						<p className="lead">
							Nossas relações são baseadas em: Qualidade, melhoria
							continua, comprometimento, transparência, confiança,
							cooperação, integridade, inovação e
							sustentabilidade.
						</p>
					</div>
					<img
						className="m-3"
						src="./assets/icons/value_black.svg"
						alt="Alvo com uma flecha"
						id="sobre-icon"
					/>
				</div>

				<div className="row pt-5 m-3 justify-content-evenly">
					<h3 className="col-sm-6 col-lg-4">
						Tem alguma dúvida? Quer conhecer nosso método de
						trabalho?
					</h3>
					<a
						href="/contato"
						className="btn text-white rounded col-sm-6 col-lg-3 align-content-center"
						id="sobre-btn-contato"
					>
						Envie uma mensagem
					</a>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Sobre;

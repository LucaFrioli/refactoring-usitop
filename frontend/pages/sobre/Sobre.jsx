import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';
import FaleConosco from '../../components/hero_send_message/FaleConosco';
import './Sobre.css';

function Sobre() {
	return (
		<>
			<Header />

			{/* CORPO */}
			<div class="row my-5 justify-content-center">
				<img
					class="col-lg-4 col-md-6 col-10"
					src="./assets/img/usitop-4.png"
					alt="Usitop Logo"
				/>
			</div>

			<div class="container-fluid my-5" id="sobre-container">
				<div class="row mb-5 mt-3 justify-content-center">
					<p class="lead col-lg-5 col-md-6 text-center">
						A Usitop é uma empresa comprometida em atender seus
						clientes com excelência, garantindo o melhor
						custo-benefício, a máxima qualidade nos serviços
						prestados e sempre respeitando os prazos.
					</p>
				</div>

				<hr class="col-md-6 offset-md-3" />

				{/* MISSÃO */}
				<div class="row m-sm-5 justify-content-center">
					<img
						class="m-3"
						src="./assets/icons/mission_black.svg"
						alt="Alvo com uma flecha"
						id="sobre-icon"
					/>
					<div class="col-lg-8 col-xl-6 col-10">
						<h2>
							<strong>Missão</strong>
						</h2>
						<p class="lead">
							Satisfazer as necessidades do mercado com serviços e
							produtos de qualidade, destinados à usinagem e
							ferramentaria, garantindo rentabilidade e atuando
							sempre com respeito.
						</p>
					</div>
				</div>

				{/* VALORES */}
				<div class="row m-sm-5 justify-content-center">
					<div class="col-lg-8 col-xl-6 col-10 text-end">
						<h2>
							<strong>Valores</strong>
						</h2>
						<p class="lead">
							Nossas relações são baseadas em: Qualidade, melhoria
							continua, comprometimento, transparência, confiança,
							cooperação, integridade, inovação e
							sustentabilidade.
						</p>
					</div>
					<img
						class="m-3"
						src="./assets/icons/value_black.svg"
						alt="Alvo com uma flecha"
						id="sobre-icon"
					/>
				</div>

				<FaleConosco
					message="Tem alguma dúvida? Quer conhecer nosso método de
					trabalho?"
				/>
			</div>

			<Footer />
		</>
	);
}

export default Sobre;

import './Produtos.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';
import CardShow from '../../components/card_show/Card_show';

function Produtos() {
	return (
		<>
			<Header />

			<div className="row mt-3 justify-content-center mx-0">
				<div className="col-lg-5 text-center my-5">
					<h1>
						<strong>Produtos</strong>
					</h1>
					<p className="mt-3">
						Confira mais informações sobre os produtos...
					</p>
				</div>
			</div>

			<section
				className="container-fluid"
				id="productsInformationsSection"
			>
				<div className="row row-col-2">
					<CardShow
						title="Moldes"
						content={[
							`Moldes sob medida para sua produção. Nossos moldes são	confeccionados com precisão e materiais de alta qualidade, garantindo peças com acabamento impecável e alta durabilidade. Desenvolvemos soluções personalizadas para atender às suas necessidades específicas.`,
							`Sua ideia, nosso molde. Transformamos seus projetos em realidade. Contamos com uma equipe especializada e maquinário de última geração para criar moldes que superam suas expectativas.`,
						]}
						id="moldes"
						path="moldes"
					/>

					<CardShow
						title="Matrizes"
						content={[
							`Extrusão de alta performance. Fabricamos matrizes de extrusão com tolerâncias mínimas, garantindo produtos finais com as características desejadas. Nossos processos garantem a precisão dimensional e o perfeito acabamento da matriz.`,
							`O formato ideal para seu produto. Desenvolvemos matrizes de extrusão sob medida para diferentes tipos de materiais e perfis, otimizando seus processos produtivos.`,
						]}
						id="matrizes"
						path="matrizes"
					/>

					<CardShow
						title="Eletro-erosão"
						content={[
							`Precisão milimétrica em cada detalhe. A eletroerosão nos permite realizar cortes complexos em materiais condutores com alta precisão. Ideal para a produção de peças com geometrias complexas e tolerâncias mínimas.`,
							`Materiais especiais, soluções precisas. Trabalhamos com diversos tipos de materiais, garantindo a melhor solução para cada aplicação. A eletroerosão é a tecnologia ideal para peças que exigem alta precisão e acabamento.`,
						]}
						id="eletro-erosao"
						path="eletro-erosao"
					/>

					<CardShow
						title="Usinagens"
						content={[
							`Produção em grande escala com qualidade. Nossa linha de produção é equipada com máquinas CNC de alta precisão, garantindo a repetibilidade e a qualidade de cada peça produzida em série.`,
							`Peças sob medida para sua linha de produção. Realizamos usinagem em série de acordo com seus desenhos técnicos, garantindo a entrega rápida e eficiente de peças com as especificações exatas.`,
						]}
						id="usinagens"
						path="usinagens"
					/>
				</div>
			</section>

			{/* Fale Conosco */}

			<div className="py-5 my-5 productsCallToAction">
				<h3 className="col-10 col-md-8 col-lg-4 text-center">
					Tem interesse? Entre em contato com a gente!
				</h3>
				<a
					href="/contato"
					className="btn text-white rounded col-lg-3 align-content-center"
					id="produtos-btn-contato"
				>
					Envie uma mensagem
				</a>
			</div>

			<Footer />
		</>
	);
}

export default Produtos;

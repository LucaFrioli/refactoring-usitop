import Footer from '../../components/footer/Footer';
import Galery from '../../components/galeria_produtos/Galery';
import Header from '../../components/header/header';
import './produtos_pages.css';
import { useEffect } from 'react';

function EletroEr() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<div className="page">
				<h1 className="montserrat-700">Eletroerosão</h1>
				<div className="textbox">
					<p>
						Na Usitop, utilizamos a tecnologia de{' '}
						<strong class="text-bold">
							eletroerosão (EDM – Electrical Discharge Machining)
						</strong>{' '}
						como um dos principais processos para a fabricação de
						componentes de alta precisão, especialmente em
						geometrias complexas e materiais de elevada dureza. Essa
						tecnologia é fundamental para alcançar níveis superiores
						de exatidão dimensional, acabamento superficial e
						detalhamento em regiões de difícil usinabilidade por
						processos convencionais.
					</p>
					<p>
						Contamos com equipamentos modernos de eletroerosão por
						penetração (EDM por afundamento) e por fio (Wire EDM),
						que permitem a usinagem de cavidades profundas, cantos
						vivos, perfis delicados e tolerâncias rigorosas,
						mantendo a integridade térmica do material, uma vez que
						não há contato direto entre ferramenta e peça.
					</p>
					<p>
						A eletroerosão é amplamente aplicada na confecção de
						moldes, matrizes, insertos, estampos e componentes
						técnicos, possibilitando a fabricação de contornos
						complexos com excelente repetibilidade. Trabalhamos com
						uma ampla variedade de materiais condutores, como aços
						temperados, metal duro, cobre e grafite, sempre
						adaptando a estratégia de usinagem às exigências
						específicas de cada projeto.
					</p>
					<p>
						Além disso, nossos processos seguem rigorosos padrões de
						controle de qualidade, com foco na durabilidade das
						peças, precisão geométrica e acabamento final. A Usitop
						também realiza eletroerosão como serviço complementar,
						oferecendo soluções em manutenção e recuperação de
						ferramental, com agilidade e confiabilidade.
					</p>
					<p>
						Combinando{' '}
						<strong class="text-bold">
							tecnologia de ponta, know-how técnico e compromisso
							com a excelência
						</strong>
						, a Usitop se destaca na fabricação por eletroerosão,
						entregando soluções sob medida para as mais exigentes
						aplicações da indústria.
					</p>
				</div>

				<Galery
					images={[
						{
							src: './assets/imgs_galeria/imgs_eletro/img1.png',
							desc: 'Exemplo de Eletro-Erosão 1',
						},
						{
							src: './assets/imgs_galeria/imgs_eletro/img2.png',
							desc: 'Exemplo de Eletro-Erosão 2',
						},
						{
							src: './assets/imgs_galeria/imgs_eletro/img3.png',
							desc: 'Exemplo de Eletro-Erosão 3',
						},
						{
							src: './assets/imgs_galeria/imgs_eletro/img4.png',
							desc: 'Exemplo de Eletro-Erosão 4',
						},
					]}
				/>
			</div>

			<Footer />
		</>
	);
}

export default EletroEr;

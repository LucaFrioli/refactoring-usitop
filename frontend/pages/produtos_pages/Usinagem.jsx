import Header from '../../components/header/header';
import Footer from '../../components/footer/Footer';
import Galery from '../../components/galeria_produtos/Galery';
import './produtos_pages.css'
import { useEffect } from 'react';

function Usinagem() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<div className="page">
				<h1><strong>Usinagem CNC e Convencional de Alta Precisão</strong></h1>

				<div className="textbox">
					<p>
						Na Usitop, oferecemos serviços completos de{' '}
						<strong>usinagem CNC e convencional</strong>, atendendo
						com excelência as demandas dos setores industriais que
						exigem precisão dimensional, repetibilidade e
						confiabilidade nos processos. Contamos com uma estrutura
						produtiva versátil, equipada com tornos, fresadoras,
						centros de usinagem CNC e máquinas convencionais, que
						nos permitem fabricar desde peças simples até
						componentes de alta complexidade geométrica.
					</p>

					<p>
						A{' '}
						<strong>
							usinagem CNC (Comando Numérico Computadorizado)
						</strong>{' '}
						é aplicada em projetos que exigem elevado grau de
						precisão, produtividade e uniformidade entre lotes. Com
						o uso de softwares de CAM e simulações, programamos
						percursos de ferramenta otimizados, reduzindo tempos de
						ciclo e aumentando a eficiência da produção. Este
						processo é ideal para peças técnicas com tolerâncias
						rigorosas, acabamento refinado e alta repetibilidade,
						inclusive em materiais de difícil usinabilidade.
					</p>

					<p>
						Já a <strong>usinagem convencional</strong> segue sendo
						uma solução estratégica para protótipos, ajustes,
						reparos, peças unitárias e produções de menor escala.
						Ela oferece flexibilidade e agilidade em operações
						pontuais, sendo operada por profissionais altamente
						qualificados, que garantem controle manual refinado em
						cada etapa do processo.
					</p>
					<p>
						Trabalhamos com diversos tipos de materiais — como aço,
						alumínio, inox, cobre, latão, nylon, POM (Delrin), entre
						outros — e realizamos operações como furação,
						mandrilhamento, rosqueamento, fresamento, torneamento e
						acabamento, sempre respeitando os critérios técnicos e
						dimensionais exigidos por nossos clientes.
					</p>
					<p>
						Cada peça usinada pela Usitop passa por rigoroso
						controle de qualidade, com medições em instrumentos
						calibrados, garantindo total conformidade com os
						desenhos técnicos e especificações fornecidas.
					</p>
					<p>
						Combinando{' '}
						<strong>
							tecnologia, conhecimento técnico e compromisso com a
							excelência
						</strong>
						, a Usitop se posiciona como parceira estratégica na
						fabricação de peças usinadas, oferecendo soluções sob
						medida com agilidade, precisão e confiança.
					</p>
				</div>

				<Galery
					images={[
						{
							src: './assets/imgs_galeria/imgs_usinagem/img1.jpg',
							desc: 'Exemplo de Usinagem 1',
						},
						{
							src: './assets/imgs_galeria/imgs_usinagem/img2.jpg',
							desc: 'Exemplo de Usinagem 2',
						},
						{
							src: './assets/imgs_galeria/imgs_usinagem/img3.jpg',
							desc: 'Exemplo de Usinagem 3',
						},
						{
							src: './assets/imgs_galeria/imgs_usinagem/img4.jpg',
							desc: 'Exemplo de Usinagem 4',
						},
					]}
				/>
			</div>

			<Footer />
		</>
	);
}

export default Usinagem;

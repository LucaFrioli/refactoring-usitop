import Header from '../../components/header/header';
import Footer from '../../components/footer/Footer';
import './produtos_pages.css';
import Galery from '../../components/galeria_produtos/Galery';
import { useEffect } from 'react';

function Moldes() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<div className="page">
				<h1>Moldes de Compressão</h1>

				<div className="textbox">
					<p>
						Na Usitop, oferecemos soluções completas e de alta
						precisão na{' '}
						<strong>fabricação de moldes de compressão</strong>, com
						foco na excelência dimensional, durabilidade e
						eficiência do processo produtivo. Atuamos desde o
						desenvolvimento do projeto até a entrega final,
						garantindo a fidelidade ao desenho técnico, a
						performance do molde e a qualidade da peça final.
					</p>
					<p>
						A moldagem por compressão é amplamente utilizada
						fabricação de componentes técnicos em materiais como
						borracha, termofixos e compostos plásticos reforçados.
						Essa tecnologia é ideal para a produção de peças com
						geometrias complexas, alta resistência mecânica e
						estabilidade térmica, sendo sendo bastante aplicada nos
						setores automotivo, eletroeletrônico, linha branca e
						industrial em geral.
					</p>
					<p>
						Nossos moldes são fabricados em aços de alta resistência
						e, sempre que necessário, passam por rigorosos processos
						de tratamento térmico para assegurar maior durabilidade
						e desempenho operacional. Além disso, realizamos o
						polimento completo das cavidades, proporcionando um
						acabamento espelhado de alto padrão, que contribui para
						a qualidade estética e funcional das peças produzidas
					</p>
					<p>
						Contamos com uma equipe técnica qualificada, capaz de
						desenvolver soluções personalizadas de acordo com a
						necessidade do cliente, realizando análises de
						viabilidade, otimização de projeto e validação
						funcional. Além disso, aplicamos práticas de melhoria
						contínua em todos os processos, garantindo eficiência,
						confiabilidade e redução de custos operacionais.
					</p>
					<p>
						Se você busca precisão, agilidade e inovação na
						fabricação de moldes de compressão, a Usitop é o seu
						parceiro ideal.
					</p>
				</div>

				<Galery
					images={[
						{
							src: './assets/imgs_galeria/imgs_moldes/img1.png',
							desc: 'Exemplo de Moldes de Compressão 1',
						},
						{
							src: './assets/imgs_galeria/imgs_moldes/img2.png',
							desc: 'Exemplo de Moldes de Compressão 2',
						},
						{
							src: './assets/imgs_galeria/imgs_moldes/img3.png',
							desc: 'Exemplo de Moldes de Compressão 3',
						},
						{
							src: './assets/imgs_galeria/imgs_moldes/img4.png',
							desc: 'Exemplo de Moldes de Compressão 4',
						},
					]}
				/>
			</div>

			<Footer />
		</>
	);
}

export default Moldes;

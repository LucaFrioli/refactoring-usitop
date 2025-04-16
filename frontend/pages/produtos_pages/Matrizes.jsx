import Header from '../../components/header/header';
import Footer from '../../components/footer/Footer';
import './Moldes.css';
import Galery from '../../components/galeria_produtos/Galery';

function Matrizes() {
	return (
		<>
			<Header />
			<div className="page">
				<h1>Matriz de Extrusão</h1>

				<div className="textbox">
					<p>
						A extrusão é um processo contínuo amplamente utilizado
						na conformação de perfis metálicos e poliméricos, onde a
						qualidade da matriz impacta diretamente na estabilidade
						dimensional, acabamento superficial e produtividade da
						linha. Por isso, nossas matrizes são projetadas para
						suportar altas pressões e temperaturas, com geometrias
						otimizadas para garantir um fluxo uniforme do material
						extrudado, minimizando tensões internas e defeitos de
						superfície.
					</p>
					<p>
						Trabalhamos com aços especiais de alta resistência ao
						desgaste e à fadiga térmica, aplicando tratamentos
						térmicos e revestimentos conforme a necessidade de cada
						aplicação. A usinagem é realizada em centros CNC,
						assegurando máxima precisão nos canais de extrusão,
						ângulos de entrada, zonas de calibragem e demais
						detalhes técnicos.
					</p>
					<p>
						Nossa equipe técnica realiza simulações de extrusão,
						testes de bancada e ajustes finos para validar o
						desempenho das matrizes antes da entrega. Também
						oferecemos suporte completo ao cliente, desde a fase de
						desenvolvimento até eventuais manutenções ou
						otimizações, garantindo longevidade ao ferramental e
						máxima eficiência ao processo produtivo.
					</p>
					<p>
						Seja para perfis simples ou de geometria complexa, a
						Usitop entrega matrizes de extrusão com alto valor
						agregado, desempenho superior e pronta adaptação às
						demandas de produção dos nossos clientes.
					</p>
				</div>

				<Galery
				
				images = {[
					{
						sourc: "*/",
						desc: "Exemplos de matrizes de extrusão",
					},
					{
						src: "*/",
						desc: "Exemplos de matrizes de extrusão",
					},
					{
						src: "*/",
						desc: "Exemplos de matrizes de extrusão",
					},
					{
						src: "*/",
						desc: "Exemplos de matrizes de extrusão",
					}
				]}

				/>

			</div>

			<Footer />
		</>
	);
}

export default Matrizes;

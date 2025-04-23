import { useNavigate } from 'react-router';
import './Card_show.css';

function CardShow({ title, content, id, path }) {
	const contentIsArray = Array.isArray(content); // caso for um array inicia um map adicionando um br a cada item do array

	const navigate = useNavigate();
	const saibaMais = () => {
		navigate(`/${path}`);
	};

	return (
		<div
			id={id}
			className="col-12 col-xl-6 text-white card-bold py-5 content-container-products-info"
		>
			<div className="container">
				<p className="card-title produtos">{title}</p>

				{contentIsArray ? ( // caso o conteúdo for um array é identificado que são varios parágrafos então eles são divididos para o texto ser organizado caso não seja um array apenas mostra o texto
					content.map((p, i) => (
						<>
							<p className="card-content w-75 mx-auto">{p}</p>
							{i < content.length - 1 && <br />}
						</>
					))
				) : (
					<p className="card-content w-75">{content}</p>
				)}

				<button
					className="btn btn-outline-light rounded mt-auto readMore"
					onClick={saibaMais}
				>
					Saiba mais
				</button>
			</div>
		</div>
	);
}

export default CardShow;

import { useNavigate } from 'react-router';

function CardShow({ title, content, id, path }) {
	const contentIsArray = Array.isArray(content); // caso for um array inicia um map adicionando um br a cada item do array

	const navigate = useNavigate();
	const saibaMais = () => {
		navigate(`/${path}`);
	};

	return (
		<div
			id={id}
			className="col-12 col-xl-6 text-white card-bold content-container-products-info"
		>
			<p className="card-title produtos">{title}</p>

			{contentIsArray ? ( // caso o conteúdo for um array é identificado que são varios parágrafos então eles são divididos para o texto ser organizado caso não seja um array apenas mostra o texto
				content.map((p, i) => (
					<>
						<p className="card-content w-75">{p}</p>
						{i < content.length - 1 && <br />}
					</>
				))
			) : (
				<p className="card-content w-75">{content}</p>
			)}

			<button
				className="btn btn-outline-light rounded-0 w-25 readMore"
				onClick={saibaMais}
			>
				Saiba mais
			</button>
		</div>
	);
}

export default CardShow;

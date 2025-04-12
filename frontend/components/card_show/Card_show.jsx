import React, { useState } from 'react';

function CardShow({ title, content, id }) {
	const [showContent, setShowContent] = useState(false);
	const contentIsArray = Array.isArray(content); // caso for um array inicia um map adicionando um br a cada item do array

	return (
		<div
			id={id}
			className="col-12 col-xl-6 text-white card-bold content-container-products-info"
		>
			<p className="card-title produtos">{title}</p>

			{showContent && // caso o botão esteja em true(ou seja foi clicado para ler mais) verifica o conteúdo que deve ser inserido, caso false esconde tudo
				(contentIsArray ? ( // caso o conteúdo for um array é identificado que são varios parágrafos então eles são divididos para o texto ser organizado caso não seja um array apenas mostra o texto
					content.map((p, i) => (
						<>
							<p className="card-content w-75">{p}</p>
							{i < content.length - 1 && <br />}
						</>
					))
				) : (
					<p className="card-content w-75">{content}</p>
				))}

			<button
				className="btn btn-outline-light rounded-0 w-25 readMore"
				onClick={() => setShowContent(!showContent)}
			>
				{showContent ? 'Leia Menos' : 'Leia Mais'}
			</button>
		</div>
	);
}

export default CardShow;

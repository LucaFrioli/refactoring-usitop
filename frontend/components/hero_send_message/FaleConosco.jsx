import './FaleConosco.css';

function FaleConosco({ message }) {
	return (
		<>
			{/* HERO "Envie uma mensagem" */}
			<div class="row py-5 my-md-5 justify-content-evenly">
				<h3 class="col-10 col-md-6 col-sm-6 col-lg-4">{message}</h3>
				<a
					href="/contato"
					class="btn text-white rounded col-8 col-sm-4 col-lg-3 align-content-center"
					id="btn-contato"
				>
					Envie uma mensagem
				</a>
			</div>
		</>
	);
}

export default FaleConosco;

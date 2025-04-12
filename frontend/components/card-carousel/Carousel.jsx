function Carousel() {
	return (
		<div className="container">
			{/* LINHA 1 */}
			<div className="row d-flex justify-content-center">
				{/* CARD 1 */}
				<div className="col-12 col-sm-12 col-lg-6 col-xl-6">
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img
									src="./assets/img/molde-compressao.jpg"
									className="img-fluid rounded-start"
									alt="Molde de Compressão"
								/>
							</div>
							<div className="col-md-8 d-flex align-items-center">
								<div className="card-body">
									<h3 className="card-title fw-bolder">
										Moldes de Compressão
									</h3>
									<hr className="col-8 card-hr" />
									<p className="card-text">
										Desenvolvemos moldes de alta qualidade,
										cuidando de cada etapa do processo.
									</p>
									<hr className="col-8 card-hr" />
									<a
										className="btn"
										href="/produtos"
										style={{ margin: 0, padding: 0 }}
									>
										<small className="text-body-secondary">
											Saiba mais
										</small>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* CARD 2 */}
				<div className="col-12 col-sm-12 col-lg-6 col-xl-6">
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img
									src="./assets/img/matriz_card2.jpeg"
									className="img-fluid rounded-start"
									alt="Matriz de Extrusão"
								/>
							</div>
							<div className="col-md-8 d-flex align-items-center">
								<div className="card-body">
									<h3 className="card-title fw-bolder">
										Matriz de Extrusão
									</h3>
									<hr className="col-8 card-hr" />
									<p className="card-text">
										Matrizes de extrusão de borracha
										personalizadas e de alta precisão.
									</p>
									<hr className="col-8 card-hr" />
									<a
										className="btn"
										href="/produtos"
										style={{ margin: 0, padding: 0 }}
									>
										<small className="text-body-secondary">
											Saiba mais
										</small>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* LINHA 2 */}
			<div className="row my-3 d-flex justify-content-center">
				{/* CARD 3 */}
				<div className="col-12 col-sm-12 col-lg-6 col-xl-6">
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img
									src="./assets/img/eletroerosao.jpeg"
									className="img-fluid rounded-start"
									alt="Eletro-erosão"
								/>
							</div>
							<div className="col-md-8 d-flex align-items-center">
								<div className="card-body">
									<h3 className="card-title fw-bolder">
										Eletro-erosão
									</h3>
									<hr className="col-8 card-hr" />
									<p className="card-text">
										Corte de formas complexas e alta
										precisão.
									</p>
									<hr className="col-8 card-hr" />
									<a
										className="btn"
										href="/produtos"
										style={{ margin: 0, padding: 0 }}
									>
										<small className="text-body-secondary">
											Saiba mais
										</small>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* CARD 4 */}
				<div className="col-12 col-sm-12 col-lg-6 col-xl-6">
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img
									src="./assets/img/usinagem-em-serie.jpeg"
									className="img-fluid rounded-start"
									alt="Usinagem em Série"
								/>
							</div>
							<div className="col-md-8 d-flex align-items-center">
								<div className="card-body">
									<h3 className="card-title fw-bolder">
										Usinagem em Série
									</h3>
									<hr className="col-8 card-hr" />
									<p className="card-text">
										Torneamento, fresamento, furação e muito
										mais.
									</p>
									<hr className="col-8 card-hr" />
									<a
										className="btn"
										href="/produtos"
										style={{ margin: 0, padding: 0 }}
									>
										<small className="text-body-secondary">
											Saiba mais
										</small>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Carousel;

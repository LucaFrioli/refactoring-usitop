function CardServicos({ imgSrc, imgAlt, title, text }) {
	return (
		<div className="col-12 col-sm-12 col-lg-6 col-xl-6 text-start">
			<div className="card mb-3 p-0">
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={imgSrc}
							className="img-fluid rounded-start"
							alt={imgAlt}
						/>
					</div>
					<div className="col-md-8 d-flex align-items-center">
						<div className="card-body">
							<h3 className="card-title fw-bolder">{title}</h3>
							<hr className="col-8 card-hr" />
							<p className="card-text">{text}</p>
							<hr className="col-8 card-hr" />
							<a
								className="btn"
								href="produtos"
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
	);
}

export default CardServicos;

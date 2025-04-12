function Header() {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-white shadow">
				<div className="container">
					<a className="navbar-brand" href="/">
						<img
							src=".\assets\img\usitop-3.png"
							alt="Logomarca da Usitop"
							height="40"
						></img>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item mx-3">
								<a className="nav-link" href="/">
									Home
								</a>
							</li>
							<li className="nav-item mx-3">
								<a className="nav-link" href="/produtos">
									Produtos
								</a>
							</li>
							<li className="nav-item mx-3">
								<a className="nav-link" href="/contato">
									Contato
								</a>
							</li>
							<li className="nav-item ms-3">
								<a className="nav-link" href="/sobre">
									Sobre
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;

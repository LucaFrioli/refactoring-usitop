import { Link } from 'react-router';
import './header.css';

function Header() {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-white shadow fixed-top">
				<div className="container">
					<a className="navbar-brand" href="/refactoring-usitop/">
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
							<li className="nav-item mx-lg-3">
								<a
									className="nav-link"
									href="/refactoring-usitop/"
								>
									HOME
								</a>
							</li>
							<li className="nav-item mx-lg-3">
								<a
									className="nav-link"
									href="/refactoring-usitop/produtos"
								>
									PRODUTOS
								</a>
							</li>
							<li className="nav-item mx-lg-3">
								<a
									className="nav-link"
									href="/refactoring-usitop/contato"
								>
									CONTATO
								</a>
							</li>
							<li className="nav-item mx-lg-3">
								<a
									className="nav-link"
									href="/refactoring-usitop/sobre"
								>
									SOBRE
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

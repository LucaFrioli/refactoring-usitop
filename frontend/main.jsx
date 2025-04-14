import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './index.css';
import App from './pages/index/App.jsx';
import Produtos from './pages/produtos/Produtos.jsx';
import Contato from './pages/contato/Contato.jsx';
import Sobre from './pages/sobre/Sobre.jsx';
import Moldes from './pages/produtos_pages/Moldes.jsx';
import Matrizes from './pages/produtos_pages/Matrizes.jsx';
import EletroEr from './pages/produtos_pages/EletroEr.jsx';
import Usinagem from './pages/produtos_pages/Usinagem.jsx';

createRoot(document.getElementById('root')).render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/produtos" element={<Produtos />} />
			<Route path="/produtos/moldes" element={<Moldes />} />
			<Route path="/produtos/matrizes" element={<Matrizes />} />
			<Route path="/produtos/eletro-erosao" element={<EletroEr />} />
			<Route path="/produtos/usinagens" element={<Usinagem />} />
			<Route path="/contato" element={<Contato />} />
			<Route path="/sobre" element={<Sobre />} />
		</Routes>
	</Router>,
);

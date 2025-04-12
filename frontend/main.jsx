import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './index.css';
import App from './pages/index/App.jsx';
import Produtos from './pages/produtos/Produtos.jsx';

createRoot(document.getElementById('root')).render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/produtos" element={<Produtos />} />
		</Routes>
	</Router>,
);

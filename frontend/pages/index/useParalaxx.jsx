import { useEffect } from 'react';

function useParallax(selector = '.parallax-img', speed = 0.3) {
	useEffect(() => {
		const handleScroll = () => {
			const elements = document.querySelectorAll(selector);
			const scrollTop = window.scrollY;

			elements.forEach((el) => {
				const movement = scrollTop * speed;
				// Limita o movimento para evitar que a imagem saia da tela
				const limitMovement = Math.min(movement, 500); // 500px é o limite máximo
				el.style.transform = `translateY(${limitMovement}px)`;
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [selector, speed]);
}

export default useParallax;

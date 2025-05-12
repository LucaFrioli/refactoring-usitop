import './Galeria.css';

function Galery(props) {
	return (
		<div class="galeria px-5">
			{props.images.map((image) => (
				<figure class="fig">
					<img class="img-galeria" src={image.src} alt={image.desc} />
				</figure>
			))}
		</div>
	);
}

export default Galery;

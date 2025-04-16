import '../../pages/produtos_pages/Moldes.css';

function Galery(props){
    return(
        <div class="galeria">

            {props.images.map((image) => (

                <figure  class="fig">
                <img src={image.sourc} alt={image.desc} />	
                </figure>

            ))}
						
				</div>
    )
}

export default Galery
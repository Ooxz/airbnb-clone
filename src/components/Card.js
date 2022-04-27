// import ImageOne from '../images/image1.png'
import Star from '../images/star.png'


export default function Card(props) {
	return (
		<div className="card-container">
			<div className='image-container'>
			<img src={props.coverImg} alt="" className="card-image"></img>
			{props.sticker &&<span className="card-span">{props.sticker}</span>}
			</div>
			<div className='card-note'>
				<img src={Star} alt="Red Star" className='star-logo'></img>
				<span>{props.rating}</span> 
				<span className='grey, reviewCount'>({props.reviewCount}) •</span>
				<span className='grey, location'>{props.location}</span>
				</div>
			<p className="card-description">{props.title}</p>
			<p className="card-price">From ${props.price} <span>/ person</span></p>
			</div>
	)
}
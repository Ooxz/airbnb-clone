import ImageOne from '../images/image1.png'
import Star from '../images/star.png'


export default function Card() {
	return (
		<div className="card-container">
			<div className='image-container'>
			<img src={ImageOne} alt="Airbnb Logo" className="card-image"></img>
			<span className="card-span">SOLD OUT</span>
			</div>
			<div className='card-note'>
				<img src={Star} alt="Red Star" className='star-logo'></img>
				<span>5.0</span> 
				<span className='grey'>(6) •</span>
				<span className='grey'>USA</span>
				</div>
			<p className="card-description">Life lessons with Katie Zaferes</p>
			<p className="card-price">From $136 <span>/ person</span></p>
			</div>
	)
}
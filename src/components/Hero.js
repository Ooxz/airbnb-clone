import GroupImage from '../images/group-images.png';

export default function Hero() {
	return (
		<div className="hero-container">
			<img src={GroupImage} alt="Airbnb Logo" className="hero-image"/>
			<div className="hero-text">
			<h1 className="hero-title">Online Experiences</h1>
			<p className="hero-paragraph">Join unique interactive activities 
				led by one-of-a-kind hosts—all 
				without leaving home.</p>
				</div>
		</div>
	)
}
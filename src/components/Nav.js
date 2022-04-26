import AirbnbLogo from '../images/airbnb-logo.png';

export default function Nav() {
	return (
		<div className="nav-container">
		<img src={AirbnbLogo} alt="Airbnb Logo" className="nav-logo"/>
		</div>
	)
}
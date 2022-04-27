import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
	const cardsData = data.map((item) => {
		return(<Card 
		title = {item.title}
		description = {item.description}
		price = {item.price}
		sticker = {item.stickers}
		coverImg = {item.coverImg}
		rating = {item.stats.rating}
		reviewCount = {item.stats.reviewCount}
		location = {item.location}
		openSpots = {item.openSpots}
		/>)
	}) 
	return (
		<>
			<Nav />
			<Hero />
			<div className="card-wrap">
				{cardsData}			
			</div>
		</>
	)
}

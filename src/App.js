import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cardsData = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        // with spread syntax we would write :
        // {...item}
        // In that case I then don't need to add .item in my props in Card.js
        // so it's less code but maybe a little less explicite when you go back to your code
      />
    );
  });
  return (
    <>
      <Nav />
      <Hero />
      <div className="card-wrap">{cardsData}</div>
    </>
  );
}

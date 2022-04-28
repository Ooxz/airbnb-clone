// import ImageOne from '../images/image1.png'
// import Star from '../images/star.png'

export default function Card(props) {
  console.log(props.item);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.stickers === "ONLINE") {
    badgeText = props.item.stickers;
  }

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.item.coverImg} alt="" className="card-image"></img>
        {badgeText && <span className="card-span">{badgeText}</span>}
      </div>
      <div className="card-note">
        <img
          src="../images/star.png"
          alt="Red Star"
          className="star-logo"
        ></img>
        <span>{props.item.stats.rating}</span>
        <span className="grey, reviewCount">
          ({props.item.stats.reviewCount}) •
        </span>
        <span className="grey, location">{props.item.location}</span>
      </div>
      <p className="card-description">{props.item.title}</p>
      <p className="card-price">
        From ${props.item.price} <span>/ person</span>
      </p>
    </div>
  );
}

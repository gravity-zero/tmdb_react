import './Card.scss';

function Card() {

  return (
    <div className="Card">
        <img className="Card-img" src="https://images-na.ssl-images-amazon.com/images/I/71wbalyU7tL._AC_SL1481_.jpg" alt="" />
        <div className="Card-info">
            <span className="Card-year">Year</span>
            <span className="Card-title">titre</span>
        </div>
    </div>
  );
}

export default Card;

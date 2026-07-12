import "./Card.css";

function Card({ title, value, icon, color }) {
  return (
    <div
      className="card"
      style={{ borderLeft: `6px solid ${color}` }}
    >
      <div className="card-icon">
        {icon}
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default Card;
import { houseColors } from '../../styles/utils';
import './style.css';

function Card3d({ char, onClick }) {
  const { image, name, house = '' } = char;

  return (
    <div
      className="card3d"
      style={{ borderColor: houseColors[house.toLowerCase()] }}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }}
      role="button"
    >
      <div className="houseBox">
        <span style={{ color: houseColors[house.toLowerCase()] }}>{house}</span>
      </div>

      <figure className="charBox">
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}

export default Card3d;

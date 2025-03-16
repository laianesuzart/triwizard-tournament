import { houseColors } from '../../styles/utils';
import './style.css';

function BasicCard({ char }) {
  const { image, name, house = '' } = char;

  return (
    <div className="basic-card" style={{ borderColor: houseColors[house.toLowerCase()] }}>
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}

export default BasicCard;

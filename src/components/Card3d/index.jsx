import './style.css';

function Card3d({ char }) {
  const { image, name, house = '' } = char;
  const colors = {
    gryffindor: '#740001',
    slytherin: '#2f751c',
    hufflepuff: '#FFD800',
    ravenclaw: '#01519b',
  };

  return (
    <div className="card3d" style={{ borderColor: colors[house.toLowerCase()] }}>
      <div className="houseBox">
        <span style={{ color: colors[house.toLowerCase()] }}>{house}</span>
      </div>

      <figure className="charBox">
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}

export default Card3d;

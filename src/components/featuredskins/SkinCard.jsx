// components/SkinCard.js
const SkinCard = ({ skin }) => {
  return (
    <div className={`skin-card`}>
      <img src={skin.image} alt={skin.name} />
      <div className="info">
        <h3 className="name">{skin.name}</h3>
        <p className="price">${skin.price}</p>
      </div>
    </div>
  );
};

export default SkinCard;

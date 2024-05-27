// components/FeaturedSkins.js
import SkinCard from './SkinCard';

const FeaturedSkins = ({ skins }) => {
  return (
    <div className='featuredskins'>
      <h2 className="heading">Featured Skins</h2>
      <div className="grid">
        {skins.map((skin) => (
          <SkinCard key={skin.id} skin={skin} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSkins;

import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import '../scss/home.scss'
import FeaturedSkins from "@/components/featuredskins/FeaturedSkins";

const Home = () => {

  const stats = {
    totalUsers: 10234,
    totalTrades: 58321,
    totalSkins: 24312,
    successfulTrades: 53124,
  };

  const skins = [
    {
      id: 1,
      name: 'AK-47 | Redline',
      price: 29.99,
      image: '/assets/ak47redline.png',
    },
    {
      id: 2,
      name: 'AWP | Dragon Lore',
      price: 1500.0,
      image: '/assets/dragonlore.png',
    },
    {
      id: 3,
      name: 'M4A1-S | Hyper Beast',
      price: 34.99,
      image: '/assets/hyperbeast.png',
    },
    // Add more skins as needed
  ];


  return (
    <div className="home">
      <Hero />
      <Statistics stats={stats}/>
      <FeaturedSkins skins={skins}/>
    </div>
  );
};

export default Home;
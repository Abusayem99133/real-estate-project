import { useEffect, useState } from "react";
import EstateCard from "./EstateCard";

const Home = () => {
  const [estateCards, setEstateCards] = useState([]);
  useEffect(() => {
    fetch("/residential.json")
      .then((res) => res.json())
      .then((data) => setEstateCards(data));
  }, []);
  // console.log(estateCards);
  return (
    <div>
      <h1 className="mt-5 text-3xl font-bold text-center">Our Estates</h1>
      <p className="text-center mt-2">Our Estates Services awesome...</p>
      <div className=" mt-6 grid md:grid-cols-2 lg:grid-cols-3 ">
        {estateCards.map((card) => (
          <EstateCard key={card.id} card={card}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

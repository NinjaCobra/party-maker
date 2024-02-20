import { useNavigate } from "react-router-dom";
import { Ingredients } from "../components";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cocktails");
  };

  return (
    <div>
      <h3>PartyMaker</h3>
      <p>
        your ultimate party companion app! Dive into a world of delightful drink
        recipes sourced from the entertaining Cocktails DB API.With just a
        swipe, unlock a world of captivating drink recipes sure to tantalize
        your taste buds and delight your friends. Get ready to boost your
        mixology skills and create delightful mocktails that will bring laughter
        and joy to every gathering!
      </p>
      <button type='button' onClick={handleClick}>
        Explore now!
      </button>
      <Ingredients />
    </div>
  );
};

export default Home;

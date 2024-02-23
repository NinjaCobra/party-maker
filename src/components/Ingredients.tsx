import { useNavigate } from "react-router-dom";

const Ingredients = () => {
  const navigate = useNavigate();

  const handleClick = (searchTerm: string) => {
    navigate(`/ingredient/${searchTerm}`);
  };

  return (
    <div>
      <div onClick={() => handleClick("gin")}>
        <img
          src='https://www.thecocktaildb.com/images/ingredients/gin-Medium.png'
          alt='gin'
        />
        <span>Gin</span>
      </div>
      <div onClick={() => handleClick("rum")}>
        <img
          src='https://www.thecocktaildb.com/images/ingredients/rum-Medium.png'
          alt='rum'
        />
        <span>Rum</span>
      </div>
      <div onClick={() => handleClick("tequila")}>
        <img
          src='https://www.thecocktaildb.com/images/ingredients/tequila-Medium.png'
          alt='tequila'
        />
        <span>Tequila</span>
      </div>
    </div>
  );
};

export default Ingredients;

import { useNavigate } from "react-router-dom";
import axios from "axios";
const randomCocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/random.php";
import { useQuery } from "@tanstack/react-query";

const randomCocktailQuery = () => {
  return {
    queryKey: ["randomCocktail"],
    queryFn: async () => {
      const { data } = await axios.get(`${randomCocktailSearchUrl}`);
      return data;
    },
  };
};

export const loader = (queryClient) => async () => {
  await queryClient.ensureQueryData(randomCocktailQuery());
  return null;
};

const RandomCocktail = () => {
  const navigate = useNavigate();
  const { data, refetch } = useQuery(randomCocktailQuery());

  const onBtnClick = () => {
    refetch();
  };
  const singleDrink = data?.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  return (
    <>
      <header>
        <button onClick={() => navigate(-1)} className='btn'>
          back home
        </button>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className='ing' key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
      <button onClick={onBtnClick}>Random is here</button>
    </>
  );
};

export default RandomCocktail;

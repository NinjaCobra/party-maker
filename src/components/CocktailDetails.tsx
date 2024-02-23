import { Navigate, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchCocktailsQuery } from "../utils";

interface DrinkDetails {
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strCategory: string;
  strGlass: string;
  strInstructions: string;
  [key: string]: string | null;
}

interface CocktailDetailsProps {
  searchType: string;
  id?: string;
}

const CocktailDetails = ({ searchType, id }: CocktailDetailsProps) => {
  const navigate = useNavigate();
  const { data, refetch } = useQuery(
    searchCocktailsQuery(searchType, id || "")
  );
  if (!data) return <Navigate to='/' />;
  const singleDrink: DrinkDetails = data[0];

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
      {searchType === "random" && (
        <button className='btn' onClick={() => refetch()}>
          Surprise me!
        </button>
      )}
    </>
  );
};

export default CocktailDetails;

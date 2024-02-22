import { useLoaderData } from "react-router-dom";
import { CocktailList, Counter } from "../components";
import { useQuery } from "@tanstack/react-query";
import { searchCocktailsQuery } from "../utils";

const CocktailsByIngredient = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(
    searchCocktailsQuery("ingredient", searchTerm)
  );
  const { data, isLoading } = useQuery(
    searchCocktailsQuery("ingredientInfo", searchTerm)
  );
  const ingredientInfo = data && data.ingredients[0];

  return (
    <>
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${searchTerm}.png`}
        alt='gin'
      />
      {!isLoading && ingredientInfo && (
        <div>
          <p>{ingredientInfo.strIngredient}</p>
          <p>{ingredientInfo.strDescription}</p>
        </div>
      )}
      <Counter drinks={drinks} />
      <CocktailList drinks={drinks} layout='list' />
    </>
  );
};

export default CocktailsByIngredient;

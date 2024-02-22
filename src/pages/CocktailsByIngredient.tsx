import { useLoaderData } from "react-router-dom";
import { CocktailList, Counter } from "../components";
import { useQuery } from "@tanstack/react-query";
import { searchCocktailsQuery } from "../utils";

const CocktailsByIngredient = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(
    searchCocktailsQuery("ingredient", searchTerm)
  );

  return (
    <>
      <img
        src='https://www.thecocktaildb.com/images/ingredients/gin.png'
        alt='gin'
      />
      <Counter drinks={drinks} />
      <CocktailList drinks={drinks} layout='list' />
    </>
  );
};

export default CocktailsByIngredient;

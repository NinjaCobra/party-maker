import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
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
      <CocktailList drinks={drinks} />
    </>
  );
};

export default CocktailsByIngredient;

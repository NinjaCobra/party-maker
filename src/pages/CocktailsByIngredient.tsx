import { useLoaderData } from "react-router-dom";
import { CocktailList, Counter } from "../components";
import { useQuery } from "@tanstack/react-query";
import { searchCocktailsQuery, searchIngredientQuery } from "../utils/index";

const CocktailsByIngredient = () => {
  const { searchTerm } = useLoaderData() as { searchTerm: string };
  const { data: drinks } = useQuery(
    searchCocktailsQuery("ingredient", searchTerm)
  );
  const { data, isLoading } = useQuery(
    searchIngredientQuery("ingredientInfo", searchTerm)
  );
  console.log(data);
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

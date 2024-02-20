import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
import { useQuery } from "@tanstack/react-query";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["ingredient", searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { ingredient } = params;
    await queryClient.ensureQueryData(searchCocktailsQuery(ingredient));
    return { ingredient };
  };

const CocktailsByIngredient = () => {
  const { ingredient } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(ingredient));

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

// import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["ingredient", searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

// export const loader =
//   (queryClient) =>
//   async ({ request }) => {
//     const url = new URL(request.url);

//     const searchTerm = url.searchParams.get("search") || "";
//     await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
//     return { searchTerm };
//   };

const CocktailsByIngredient = () => {
  const { state } = useLocation();
  // const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(state.searchTerm));
  console.log(drinks);

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

import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["letter", searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { letter } = params;
    await queryClient.ensureQueryData(searchCocktailsQuery(letter));
    return { letter };
  };

const Cocktails = () => {
  const { letter } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(letter));

  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Cocktails;

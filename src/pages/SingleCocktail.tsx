import { useLoaderData } from "react-router-dom";
// import { getCocktailQuery } from "../utils";
import { searchCocktailsQuery } from "../utils";
import { CocktailDetails } from "../components";

const SingleCocktail = () => {
  const { searchTerm } = useLoaderData();
  return (
    <CocktailDetails
      searchType='cocktail'
      queryFn={searchCocktailsQuery}
      id={searchTerm}
    />
  );
};

export default SingleCocktail;

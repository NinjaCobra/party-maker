import { useLoaderData } from "react-router-dom";
import { CocktailDetails } from "../components";

const SingleCocktail = () => {
  const { searchTerm } = useLoaderData() as { searchTerm: string };
  return <CocktailDetails searchType='cocktail' id={searchTerm} />;
};

export default SingleCocktail;

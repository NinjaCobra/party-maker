import { searchCocktailsQuery } from "../utils";
import { CocktailDetails } from "../components";

const RandomCocktail = () => {
  return (
    <>
      <CocktailDetails
        searchType='random'
        queryFn={searchCocktailsQuery}
        id=''
      />
    </>
  );
};

export default RandomCocktail;

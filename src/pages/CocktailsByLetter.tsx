import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CocktailList from "../components/CocktailList";
import { searchCocktailsQuery } from "../utils";

const Cocktails = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery("letter", searchTerm));

  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Cocktails;

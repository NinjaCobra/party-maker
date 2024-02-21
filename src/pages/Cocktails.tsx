import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { searchCocktailsQuery } from "../utils";
import { useQuery } from "@tanstack/react-query";

const Cocktails = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(
    searchCocktailsQuery("name", searchTerm || "all")
  );
  console.log(drinks);

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Cocktails;

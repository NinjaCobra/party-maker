import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { searchCocktailsQuery } from "../utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ListViewToggle } from "../components";

const Cocktails = () => {
  const [layout, setLayout] = useState("grid");
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(
    searchCocktailsQuery("name", searchTerm || "all")
  );

  const handleToggle = () => {
    if (layout === "grid") {
      setLayout("list");
      return;
    }

    setLayout("grid");
  };

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <ListViewToggle onToggle={handleToggle} layout={layout} />
      <CocktailList drinks={drinks} layout={layout} />
    </>
  );
};

export default Cocktails;

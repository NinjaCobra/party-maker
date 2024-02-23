import { searchCocktailsQuery } from "../utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  ListViewToggle,
  SearchForm,
  CocktailList,
  Counter,
} from "../components";

interface ContainerProps {
  searchTerm: string;
  searchType: string;
  showSearchForm: boolean;
}

const getLayoutFromLocalStorage = (): string => {
  return localStorage.getItem("layout") || "grid";
};

const CocktailsContainer = ({
  searchTerm,
  searchType,
  showSearchForm,
}: ContainerProps) => {
  const [layout, setLayout] = useState(getLayoutFromLocalStorage());
  const { data: drinks } = useQuery(
    searchCocktailsQuery(searchType, searchTerm)
  );
  const handleToggle = () => {
    const newLayout = layout === "grid" ? "list" : "grid";
    setLayout(newLayout);
    localStorage.setItem("layout", newLayout);
  };

  return (
    <>
      {showSearchForm && <SearchForm searchTerm={searchTerm} />}
      <ListViewToggle onToggle={handleToggle} layout={layout} />
      <Counter drinks={drinks} />
      <CocktailList drinks={drinks} layout={layout} />
    </>
  );
};

export default CocktailsContainer;

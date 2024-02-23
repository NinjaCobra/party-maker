import CocktailCard from "./CocktailCard";

export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
}

interface CocktailListProps {
  drinks: Drink[];
  layout: string;
}

const CocktailList = ({ drinks, layout }: CocktailListProps) => {
  console.log(drinks);
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <div
      className={
        layout === "grid"
          ? "pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          : "mt-12 grid gap-y-8"
      }>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} layout={layout} />;
      })}
    </div>
  );
};

export default CocktailList;

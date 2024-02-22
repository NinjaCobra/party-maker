import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks, layout }) => {
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
        return <CocktailCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CocktailList;

import { Title, Ingredient } from '../components';

const IngredientsList = () => {
    const ingredients = ['gin', 'rum', 'tequila'];

    return (
        <section className="mb-10 px-10 text-center">
            <Title title="popular ingredients" />
            <div className="carousel-container  xl:flex-list sm:max-h-[450px]">
                {ingredients.map((item) => {
                    return <Ingredient ingredient={item} />;
                })}
            </div>
        </section>
    );
};

export default IngredientsList;

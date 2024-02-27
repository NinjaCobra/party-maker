import { Title, Ingredient } from '../components';

const IngredientsList = () => {
    const ingredients = ['gin', 'rum', 'tequila'];

    return (
        <section className="mb-10 px-10">
            <Title title="popular ingredients" />
            <div className="flex items-center justify-around">
                {ingredients.map((item) => {
                    return <Ingredient ingredient={item} />;
                })}
            </div>
        </section>
    );
};

export default IngredientsList;

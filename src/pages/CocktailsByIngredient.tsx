import { useLoaderData } from 'react-router-dom';
import { CocktailList, Counter, Title } from '../components';
import { useQuery } from '@tanstack/react-query';
import { searchCocktailsQuery, searchIngredientQuery } from '../utils/index';

const CocktailsByIngredient = () => {
    const { searchTerm } = useLoaderData() as { searchTerm: string };
    const { data: drinks } = useQuery(
        searchCocktailsQuery('ingredient', searchTerm)
    );
    const { data, isLoading } = useQuery(
        searchIngredientQuery('ingredientInfo', searchTerm)
    );
    const ingredientInfo = data && data.ingredients[0];

    return (
        <section className="mb-10  px-10">
            <div className="mb-5 flex flex-col items-center justify-center xl:flex-row">
                <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${searchTerm}.png`}
                    alt="gin"
                />
                {!isLoading && ingredientInfo && (
                    <div className="text-center">
                        <Title title={`${searchTerm} Ingredient Expedition`} />
                        <p className="text-justify indent-5">
                            {ingredientInfo.strDescription}
                        </p>
                    </div>
                )}
            </div>
            <div>
                <Counter drinks={drinks} />
                <CocktailList drinks={drinks} layout="list" />
            </div>
        </section>
    );
};

export default CocktailsByIngredient;

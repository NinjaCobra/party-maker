import { Navigate, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { searchCocktailsQuery } from '../utils';
import { BsChevronLeft } from 'react-icons/bs';

interface DrinkDetails {
    strDrink: string;
    strDrinkThumb: string;
    strAlcoholic: string;
    strCategory: string;
    strGlass: string;
    strInstructions: string;
    [key: string]: string | null;
}

interface CocktailDetailsProps {
    searchType: string;
    id?: string;
}

const CocktailDetails = ({ searchType, id }: CocktailDetailsProps) => {
    const navigate = useNavigate();
    const { data, refetch } = useQuery(
        searchCocktailsQuery(searchType, id || '')
    );
    if (!data) return <Navigate to="/" />;
    const singleDrink: DrinkDetails = data[0];

    const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
    } = singleDrink;

    const validIngredients = Object.keys(singleDrink)
        .filter(
            (key) =>
                key.startsWith('strIngredient') && singleDrink[key] !== null
        )
        .map((key) => singleDrink[key]);
    return (
        <section className="mb-10  px-10">
            <header className="mb-10">
                <button onClick={() => navigate(-1)} className="btn uppercase">
                    <BsChevronLeft /> back
                </button>
            </header>
            <div className="card bg-base-100 shadow-xl lg:card-side">
                <figure className="lg:w-1/2">
                    <img src={image} alt={name} className="img" />
                </figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="mb-2 text-center text-2xl font-bold uppercase lg:mb-4 lg:text-4xl">
                        {name}
                    </h2>
                    <div>
                        <p className="drink-text">
                            <span className="drink-data">category</span>
                            {category}
                        </p>
                        <p className="drink-text">
                            <span className="drink-data">info</span>
                            {info}
                        </p>
                        <p className="drink-text">
                            <span className="drink-data">glass</span>
                            {glass}
                        </p>
                        <p className="drink-text">
                            <span className="drink-data">ingredients</span>
                            {validIngredients.map((item, index) => {
                                return (
                                    <span className="ing" key={item}>
                                        {item}
                                        {index < validIngredients.length - 1
                                            ? ', '
                                            : ''}
                                    </span>
                                );
                            })}
                        </p>
                        <p className="drink-text">
                            <span className="drink-data">instructions</span>
                            {instructions}
                        </p>
                    </div>

                    {searchType === 'random' && (
                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-accent"
                                onClick={() => refetch()}
                            >
                                Surprise me!
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CocktailDetails;

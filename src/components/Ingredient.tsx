import { useNavigate } from 'react-router-dom';

const Ingredient = ({ ingredient }: { ingredient: string }) => {
    const navigate = useNavigate();

    const handleClick = (searchTerm: string) => {
        navigate(`/ingredient/${searchTerm}`);
    };

    return (
        <div
            className="card carousel-item glass max-w-96 cursor-pointer transition duration-300 ease-in-out hover:scale-90 hover:bg-neutral-content hover:text-neutral "
            onClick={() => handleClick(ingredient)}
        >
            <figure>
                <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`}
                    alt={ingredient}
                />
            </figure>
            <div className="card-body">
                <h3 className="card-title text-3xl capitalize ">
                    {ingredient}
                </h3>
            </div>
        </div>
    );
};

export default Ingredient;

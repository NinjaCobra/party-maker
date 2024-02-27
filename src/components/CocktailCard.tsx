import { Link } from 'react-router-dom';

interface CardProps {
    image: string;
    name: string;
    id: string;
    info: string;
    glass: string;
    layout: string;
}

const CocktailCard = ({ image, name, id, info, glass, layout }: CardProps) => {
    return layout === 'grid' ? (
        <Link
            to={`/cocktail/${id}`}
            className="card w-full shadow-xl transition duration-300 hover:shadow-2xl"
        >
            <div className="px-4 pt-4">
                <img
                    src={image}
                    alt={name}
                    className="h-64 w-full rounded-xl object-cover md:h-48"
                />
            </div>
            <div className="card-body items-center text-center">
                <h4 className="card-title capitalize tracking-wider">{name}</h4>
            </div>
        </Link>
    ) : (
        <Link
            to={`/cocktail/${id}`}
            className="group flex flex-col flex-wrap gap-y-4 rounded-lg bg-base-100  p-8 shadow-xl duration-300 hover:shadow-2xl sm:flex-row"
        >
            <img
                src={image}
                alt={name}
                className="h-24 w-24 rounded-lg object-cover transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32"
            />
            <div className="ml-0 sm:ml-16">
                <h4 className="text-lg font-medium capitalize">{name}</h4>
                <p className="text-md capitalize text-neutral-content">
                    {glass}
                </p>
                <p className="ml-0 text-lg font-medium sm:ml-auto">{info}</p>
            </div>
        </Link>
    );
};

export default CocktailCard;

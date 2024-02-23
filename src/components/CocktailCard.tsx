import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  name: string;
  id: string;
  info: string;
  glass: string;
  layout: string;
}

const CocktailCard = ({ image, name, id, info, glass, layout }: CardProps) => {
  return layout === "grid" ? (
    <Link
      to={`/cocktail/${id}`}
      className='card w-full shadow-xl hover:shadow-2xl transition duration-300'>
      <div className='px-4 pt-4'>
        <img
          src={image}
          alt={name}
          className='rounded-xl h-64 md:h-48 w-full object-cover'
        />
      </div>
      <div className='card-body items-center text-center'>
        <h4 className='card-title capitalize tracking-wider'>{name}</h4>
      </div>
    </Link>
  ) : (
    <Link
      to={`/cocktail/${id}`}
      className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'>
      <img
        src={image}
        alt={name}
        className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
      />
      <div className='ml-0 sm:ml-16'>
        <h4 className='capitalize font-medium text-lg'>{name}</h4>
        <p className='capitalize text-md text-neutral-content'>{glass}</p>
        <p className='font-medium ml-0 sm:ml-auto text-lg'>{info}</p>
      </div>
    </Link>
  );
};

export default CocktailCard;

import { Drink } from './CocktailList';

type Drinks = {
    drinks: Drink[];
};

const Counter = ({ drinks }: Drinks) => {
    return (
        <h4 className="text-md font-medium">
            {drinks && drinks.length} cocktail
            {drinks && drinks.length > 1 && 's'}
        </h4>
    );
};

export default Counter;

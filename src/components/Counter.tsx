import { Drink } from './CocktailList';

type Drinks = {
    drinks: Drink[];
};

const Counter = ({ drinks }: Drinks) => {
    if (!drinks || drinks.length === 0) {
        return <h4 className="text-md font-medium">0 cocktails</h4>;
    }

    return (
        <h4 className="text-md font-medium">
            {drinks && drinks.length} cocktail
            {drinks && drinks.length > 1 && 's'}
        </h4>
    );
};

export default Counter;

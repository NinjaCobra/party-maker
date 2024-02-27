import { useLoaderData } from 'react-router-dom';
import { CocktailsContainer } from '../components';

const getSearchTermFromLocalStorage = () => {
    return localStorage.getItem('search') || '';
};

const Cocktails = () => {
    const { searchTerm } = useLoaderData() as { searchTerm: string };

    return (
        <CocktailsContainer
            searchTerm={searchTerm || getSearchTermFromLocalStorage()}
            searchType="name"
            showSearchForm={true}
            title="Pour Your Pleasure"
        />
    );
};

export default Cocktails;

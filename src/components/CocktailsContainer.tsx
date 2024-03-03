import { searchCocktailsQuery } from '../utils';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
    ListViewToggle,
    SearchForm,
    CocktailList,
    Counter,
    Title,
} from '../components';

interface ContainerProps {
    searchTerm: string;
    searchType: string;
    showSearchForm: boolean;
    title: string;
}

const getLayoutFromLocalStorage = (): string => {
    return localStorage.getItem('layout') || 'grid';
};

const CocktailsContainer = ({
    searchTerm,
    searchType,
    showSearchForm,
    title,
}: ContainerProps) => {
    const [layout, setLayout] = useState(getLayoutFromLocalStorage());
    const { data: drinks } = useQuery(
        searchCocktailsQuery(searchType, searchTerm)
    );
    const handleToggle = () => {
        const newLayout = layout === 'grid' ? 'list' : 'grid';
        setLayout(newLayout);
        localStorage.setItem('layout', newLayout);
    };

    return (
        <section className="mb-10 px-10">
            {showSearchForm && <SearchForm searchTerm={searchTerm} />}
            <ListViewToggle onToggle={handleToggle} layout={layout} />
            <Counter drinks={drinks} />
            <Title title={title} />
            <CocktailList drinks={drinks} layout={layout} />
        </section>
    );
};

export default CocktailsContainer;

import { Form, useNavigation } from 'react-router-dom';
import { useState, FormEvent, ChangeEvent } from 'react';

const getValueFromLocalStorage = (): string => {
    return localStorage.getItem('search') || '';
};

const SearchForm = ({ searchTerm }: { searchTerm: string }) => {
    const [value, setValue] = useState(getValueFromLocalStorage());
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';
    const handleSubmit = (e: FormEvent) => {
        const formData = new FormData(e.target as HTMLFormElement);
        const searchTerm = formData.get('search') as string;
        localStorage.setItem('search', searchTerm);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (e.target.value === '') {
            localStorage.removeItem('search');
        }
    };

    return (
        <Form
            className="form mb-5 flex items-center justify-center"
            onSubmit={handleSubmit}
        >
            <label className="input input-bordered mr-4 flex w-1/2 items-center gap-2">
                <input
                    type="search"
                    placeholder="Search"
                    name="search"
                    className="form-input grow"
                    defaultValue={searchTerm}
                    onChange={handleChange}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                    style={{ display: `${value ? 'none' : 'block'}` }}
                >
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </label>
            <button
                type="submit"
                className="btn btn-neutral"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'searching...' : 'search'}
            </button>
        </Form>
    );
};

export default SearchForm;

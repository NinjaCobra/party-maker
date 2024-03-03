import { Title } from '../components';
import { Link } from 'react-router-dom';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const SearchByLetter = () => {
    return (
        <section className="mb-10 px-5">
            <Title title="browse by name" />
            <div className="flex flex-wrap items-center justify-center">
                {alphabet.map((letter) => (
                    <Link
                        to={`/letter/${letter}`}
                        key={letter}
                        className="mr-5 cursor-pointer rounded p-1 text-2xl transition duration-200 ease-in-out hover:scale-110 hover:bg-accent-content  hover:text-accent "
                    >
                        {letter.toUpperCase()}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default SearchByLetter;

import { Title } from '../components';
import { Link } from 'react-router-dom';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const SearchByLetter = () => {
    return (
        <section className="">
            <Title title="browse by name" />
            <div className="mb-10 flex items-center justify-center px-5">
                {alphabet.map((letter) => (
                    <Link
                        to={`/letter/${letter}`}
                        key={letter}
                        className="mr-5 cursor-pointer text-2xl hover:text-blue-500 "
                    >
                        {letter.toUpperCase()}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default SearchByLetter;

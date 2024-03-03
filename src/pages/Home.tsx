import { useNavigate } from 'react-router-dom';
import { IngredientsList } from '../components';
import bg from '../assets/background.jpg';

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/cocktails');
    };

    return (
        <>
            <header
                className="mb-10 flex min-h-screen items-center justify-end bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="p-8 text-right">
                    <div className="max-w-xl rounded-xl bg-black opacity-90">
                        <h1 className="mb-5 text-5xl uppercase text-primary xl:text-7xl">
                            PartyMaker
                        </h1>
                        <p className="mb-5  p-6 text-left text-primary">
                            Your ultimate party companion app! Dive into a world
                            of delightful drink recipes sourced from the
                            entertaining Cocktails DB API. With just a swipe,
                            unlock a world of captivating drink recipes sure to
                            tantalize your taste buds and delight your friends.
                            Get ready to boost your mixology skills and create
                            delightful mocktails that will bring laughter and
                            joy to every gathering!
                        </p>
                        <button
                            type="button"
                            className="btn  bg-accent text-accent-content"
                            onClick={handleClick}
                        >
                            Explore now!
                        </button>
                    </div>
                </div>
            </header>
            <IngredientsList />
        </>
    );
};

export default Home;

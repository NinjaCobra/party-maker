import { useNavigate } from 'react-router-dom';
import { IngredientsList } from '../components';

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/cocktails');
    };

    const bg = '/src/assets/background.jpg';

    return (
        <>
            <header
                className="mb-10 flex min-h-screen items-center justify-end bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="p-8 text-right">
                    <div className="max-w-xl">
                        <h1 className="mb-5  text-7xl uppercase">PartyMaker</h1>
                        <p className="mb-5 py-6 text-left">
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
                            className="btn btn-primary "
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

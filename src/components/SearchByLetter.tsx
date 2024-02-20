import { Link } from "react-router-dom";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const SearchByLetter = () => {
  return (
    <div>
      {alphabet.map((letter) => (
        <Link to={`/letter/${letter}`} key={letter}>
          {letter.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default SearchByLetter;

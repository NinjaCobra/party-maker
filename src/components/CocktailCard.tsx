import { Link, useNavigate } from "react-router-dom";

const CocktailCard = ({ image, name, id, info, glass }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/cocktail/${id}`);
  };

  return (
    <div onClick={handleClick}>
      <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn'>
          details
        </Link>
      </div>
    </div>
  );
};

export default CocktailCard;

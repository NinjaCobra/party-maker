const Counter = ({ drinks }) => {
  return (
    <h4 className='font-medium text-md'>
      {drinks && drinks.length} cocktail{drinks && drinks.length > 1 && "s"}
    </h4>
  );
};

export default Counter;

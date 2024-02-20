import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div>
        <img src='' alt='not found' />
        <h3>We can't find page you are looking for</h3>
        <Link to='/'>back to home</Link>
      </div>
    );
  }

  return (
    <div>
      <h3>Something went wrong</h3>
    </div>
  );
};

export default Error;

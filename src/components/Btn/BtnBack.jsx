import { Link } from 'react-router-dom';

export const BtnBack = ({ path }) => {
  return (
    <button>
      <Link to={path}>Back</Link>
    </button>
  );
};

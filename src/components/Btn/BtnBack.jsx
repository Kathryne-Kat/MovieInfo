import { Link } from 'react-router-dom';
import css from '../MovieInfo/movieInfo.module.css';

export const BtnBack = ({ path }) => {
  return (
    <button className={css.btnBack}>
      <Link className={css.linkBack} to={path}>
        Back
      </Link>
    </button>
  );
};

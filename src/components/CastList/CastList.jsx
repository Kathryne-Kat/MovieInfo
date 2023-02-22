import { CastListItem } from './CastListItem';
import css from './cast.module.css';
import PropTypes from 'prop-types';

export const CastList = ({ casts }) => {
  return (
    <ul className={css.casteList}>
      {casts && casts.map(cast => <CastListItem key={cast.id} {...cast} />)}
    </ul>
  );
};

CastList.propTypes = {
  casts: PropTypes.array.isRequired,
};

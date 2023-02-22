import { CastListItem } from './CastListItem';
import css from './cast.module.css';

export const CastList = ({ casts }) => {
  return (
    <ul className={css.casteList}>
      {casts && casts.map(cast => <CastListItem key={cast.id} {...cast} />)}
    </ul>
  );
};

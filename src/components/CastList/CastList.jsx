import { CastListItem } from './CastListItem';

export const CastList = ({ casts }) => {
  return (
    <ul className="">
      {casts && casts.map(cast => <CastListItem key={cast.id} {...cast} />)}
    </ul>
  );
};

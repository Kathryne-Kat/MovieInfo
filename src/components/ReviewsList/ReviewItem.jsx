import PropTypes from 'prop-types';

export const ReviewItem = ({ author, content }) => {
  return (
    <li className="">
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

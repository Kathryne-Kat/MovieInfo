export const ReviewItem = ({ author, content }) => {
  return (
    <li className="">
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

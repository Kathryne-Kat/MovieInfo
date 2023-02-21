import { ReviewItem } from './ReviewItem';

export const ReviewsList = ({ reviews }) => {
  console.log(reviews);
  return (
    <ul className="">
      {reviews &&
        reviews.map(review => <ReviewItem key={review.id} {...review} />)}
    </ul>
  );
};

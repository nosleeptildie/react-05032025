import { use } from "react";
import { AuthContext } from "../Auth-context/index";
import { Review } from "../Review/review";
import { ReviewForm } from "../Reviews-form/reviews-form";

export const Reviews = ({ reviews }) => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      {isAuthorized && <ReviewForm />}
    </div>
  );
};

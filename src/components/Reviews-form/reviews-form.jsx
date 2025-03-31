import { Counter } from "../Counter/counter.jsx";
import { useReviewForm } from "./use-reviews-form.js";

export const ReviewForm = () => {
  const {
    name,
    text,
    rating,
    MAX_COUNT,
    MIN_COUNT,
    setNameAction,
    setTextAction,
    incrementRating,
    decrementRating,
    clearAction,
  } = useReviewForm();

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <label>Имя:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setNameAction(e.target.value)}
        />
      </div>
      <br />
      <div style={{ display: "flex", gap: "10px" }}>
        <label>Отзыв:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setTextAction(e.target.value)}
        />
      </div>
      <br />
      <div style={{ display: "flex", gap: "10px" }}>
        <label>Оценка:</label>
        <Counter
          count={rating}
          min={MIN_COUNT}
          max={MAX_COUNT}
          increment={incrementRating}
          decrement={decrementRating}
        />
      </div>
      <br />
      <button onClick={() => clearAction()}>Очистить форму</button>
    </div>
  );
};

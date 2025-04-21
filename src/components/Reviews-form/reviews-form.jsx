import { Counter } from "../Counter/counter";
import { useForm } from "./use-reviews-form";
import reviewFormStyle from "./reviews-form.module.css";

export const ReviewForm = () => {
  const {
    name,
    text,
    rating,
    setRatingIncrement,
    setRatingDecrement,
    setName,
    setText,
    clearForm,
  } = useForm();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={reviewFormStyle.container}>
        <h4>Оставить отзыв</h4>
        <div>
          <span>Имя:</span>
        </div>
        <div>
          <input
            className={reviewFormStyle.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <span>Отзыв:</span>
        </div>
        <div>
          <textarea
            className={reviewFormStyle.textarea}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>Оценка:</div>
        <div className={reviewFormStyle.reviewRating}>
          <Counter
            increment={setRatingIncrement}
            decrement={setRatingDecrement}
            count={rating}
          />
        </div>
        <div>
          <button
            className={reviewFormStyle.clearButton}
            onClick={() => clearForm()}
          >
            Очистить
          </button>
          <button
            className={reviewFormStyle.submitButton}
            onClick={handleFormSubmit}
          >
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
};

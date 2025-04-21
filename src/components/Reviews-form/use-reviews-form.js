import { useReducer, useCallback } from 'react';

export const MIN_COUNT = 0;
export const MAX_COUNT = 5;

export const SET_NAME_ACTION = 'SET_NAME_ACTION';
export const SET_TEXT_ACTION = 'SET_TEXT_ACTION';
export const SET_RATING_INCREMENT = 'SET_RATING_INCREMENT';
export const SET_RATING_DECREMENT = 'SET_RATING_DECREMENT';
export const CLEAR_FORM = 'CLEAR_FORM';

export const DEFAULT_FORM_VALUE = {
  name: '',
  text: '',
  count: MIN_COUNT,
  rating: MIN_COUNT,
};


export const useForm = () => {

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case SET_NAME_ACTION:
        return { ...state, name: payload };
      case SET_TEXT_ACTION:
        return { ...state, text: payload };
      case SET_RATING_INCREMENT:
        return {
          ...state,
          rating: state.rating >= MAX_COUNT ? MAX_COUNT : state.rating + 1,
        };
      case SET_RATING_DECREMENT:
        return {
          ...state,
          rating: state.rating > MIN_COUNT ? state.rating - 1 : MIN_COUNT,
        };
      
      case CLEAR_FORM:
        return DEFAULT_FORM_VALUE;
      default:
        return state;
    }
  };

  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { name, text, rating } = form;

  const setName = useCallback (
    (name) => dispatch({ type: SET_NAME_ACTION, payload: name }),
    []
  );
  const setText = useCallback (
    (text) => dispatch({ type: SET_TEXT_ACTION, payload: text }),
    []
  );
  const setRatingIncrement = useCallback (
    () => dispatch({ type: SET_RATING_INCREMENT }),
    []
  );
  const setRatingDecrement = useCallback(
    () => dispatch({ type: SET_RATING_DECREMENT }),
    []
  );
  const clearForm = useCallback (
    () => dispatch({ type: CLEAR_FORM }),
    []
  );

  return {
    name,
    text,
    rating,
    setRatingIncrement,
    setRatingDecrement,
    setName,
    setText,
    clearForm,
  };
};

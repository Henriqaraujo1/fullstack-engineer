import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/cards/cardSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import topicsReducer from "../features/topics/topicsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer,
  },
});

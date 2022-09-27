import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const options = {
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { quizId, name, topicId, cardIds } = action.payload;
      state.quizzes[quizId] = {
        id: quizId,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
  }
};

export const addQuizAddQuizId = quiz => {
  const { quizId, name, topicId, cardIds } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizId({ quizId: quizId, topicId: topicId }));
  };
};

//Create the slice Quizzes
export const quizzesSlice = createSlice(options);
//Export Selectors
export const selectQuizes = (state) => state.quizzes.quizzes;
//export actions + reducers
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

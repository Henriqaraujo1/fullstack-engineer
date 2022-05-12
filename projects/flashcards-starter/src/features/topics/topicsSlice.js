import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "topics",
  initialState: {
    topics: []
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    }
  }
};

export const topicsSlice = createSlice(options);
//selectors
export const selectTopics = (state) => state.topics.topics;
//action + reducers
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;

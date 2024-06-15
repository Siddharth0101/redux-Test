import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
  },
  reducers: {
    DISPLAY(state, actions) {
      state.items = actions.payload;
    },
    EDIT() {},
    DELETE() {},
  },
});
export const DataSliceActions = DataSlice.actions;
export default DataSlice;

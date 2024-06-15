import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./Data";

const ReduxStore = configureStore({
  reducer: { Data1: DataSlice.reducer },
});
export default ReduxStore;

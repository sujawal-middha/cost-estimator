import { configureStore } from "@reduxjs/toolkit";
import featureReducer from "./featureSlice";

export default configureStore({
  reducer: {
    features: featureReducer,
  },
});

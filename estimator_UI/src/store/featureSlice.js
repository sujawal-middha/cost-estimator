import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
  name: "features",
  initialState: {
    selectedFeatures: [],
  },
  reducers: {
    addFeature: (state, action) => {
      state.selectedFeatures.push(action.payload);
    },
    removeFeature: (state, action) => {
      state.selectedFeatures = state.selectedFeatures.filter(
        (f) => f.id !== action.payload
      );
    },
    clearFeatures: (state) => {
      state.selectedFeatures = [];
    },
  },
});

export const { addFeature, removeFeature, clearFeatures } = featureSlice.actions;
export default featureSlice.reducer;

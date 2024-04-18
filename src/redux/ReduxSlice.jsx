import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    items: [],
    grandtotal: 0,
  },
  reducers: {
    addentry: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    addtotal: (state, action) => {
      return {
        ...state,
        grandtotal: state.grandtotal + action.payload,
      };
    },
    removetotal: (state, action) => {
      return {
        ...state,
        grandtotal: state.grandtotal - action.payload,
      };
    },
    removeEntry: (state, action) => {
      const { index } = action.payload;
      console.log("coming here--->>", index);
      if (index < 0 || index >= state.items.length || index === undefined) {
        return state; // Invalid index, return current state
      }

      const newItems = [...state.items]; // Create a copy of the items array
      newItems.splice(index, 1); // Remove the item at the specified index

      return {
        ...state,
        items: newItems,
      };
    },
  },
});

// niche wala jayega jaha pe use hona hai
export const { addentry, addtotal, removeEntry, removetotal } =
  counterSlice.actions;
// niche wala jayega configuration k pas me
export default counterSlice.reducer;

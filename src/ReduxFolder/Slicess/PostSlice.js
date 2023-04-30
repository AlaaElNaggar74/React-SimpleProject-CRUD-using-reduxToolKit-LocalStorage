import { createSlice } from "@reduxjs/toolkit";

let itemfromlocalstorge =
  localStorage.getItem("postoflist") !== null
    ? JSON.parse(localStorage.getItem("postoflist"))
    : [];

export const postSlice = createSlice({
  name: "postName",
  initialState: {
    item: itemfromlocalstorge,
    coun: 0,
  },
  reducers: {
    addpost: (state, action) => {
      state.item.push(action.payload);
      localStorage.setItem("postoflist", JSON.stringify(state.item));
    },
    deletepost: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("postoflist", JSON.stringify(state.item));
    },
    updatepost: (state, action) => {
      state.item.map((item) => {
        if (item.id === action.payload.id) {
          item.Title = action.payload.Title;
          item.Description = action.payload.Description;
          localStorage.setItem("postoflist", JSON.stringify(state.item));
        }
      });
    },
    clearall: (state, action) => {
      state.item = [];
      localStorage.setItem(
        "postoflist",
        JSON.stringify(state.item.map((item) => item))
      );
    },
  },
});

export const { addpost, deletepost, updatepost, clearall } = postSlice.actions;

export default postSlice.reducer;

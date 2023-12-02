import { createSlice } from "@reduxjs/toolkit";

// need logic to post new user info to API??

// state to check whether to show LoginForm or RegisterForm
const userData = {
  isNew: false
};

export const registerSlice = createSlice({
  name: "user",
  initialState: userData,
  reducers: {
    setIsNew: (state) => {
      state.isNew = !state.isNew;
    }
  }
});

export const { setIsNew } = registerSlice.actions;
export default registerSlice.reducer;
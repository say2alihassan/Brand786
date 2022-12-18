import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  user: null,
  authToken: null,
};
export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthToken: (state, action) => {
      console.log(state.authToken, 'token');
      state.authToken = action.payload;
    },
  },
});
export const {setUser, setAuthToken} = userReducer.actions;
export default userReducer.reducer;

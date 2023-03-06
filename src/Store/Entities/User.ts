import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  onboarded: boolean;
}

const initialState: UserState = {
  onboarded: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setOnboard: user => {
      user.onboarded = true;
    },
  },
});

export default user.reducer;
export const {setOnboard} = user.actions;

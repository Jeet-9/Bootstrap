import { createSlice, nanoid } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      const { name, lastName, phoneNumber, password } = action.payload;
      state.users.push({ id: nanoid(), name, lastName, phoneNumber, password });
    },
    editUser: (state, action) => {
      const { id, name, lastName, phoneNumber, password } = action.payload;
      const existingUser = state.users.find(user => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.lastName = lastName;
        existingUser.phoneNumber = phoneNumber;
        existingUser.password = password;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;

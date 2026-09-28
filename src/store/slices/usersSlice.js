import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers(builder) {
    //Fetch users
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // Add user
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // remove User
    builder.addCase(removeUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((user) => {
        return user.id !== action.payload.id;
      });
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;

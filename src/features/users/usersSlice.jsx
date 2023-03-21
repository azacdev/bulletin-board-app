import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: '0', name: "Frank"},
  {id: '1', name: "Henry"},
  {id: '2', name: "Robbert"}
]

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer

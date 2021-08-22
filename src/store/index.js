import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    visible: true
  },
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    increase(state, action) {
      state.value += action.payload
    },
    toggleVisibility(state) {
      state.visible = !state.visible
    }
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false
  },
  reducers: {
    login(state) {
      state.authenticated = true
    },
    logout(state) {
      state.authenticated = false
    }
  }
})

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

export const { increment, decrement, increase, toggleVisibility } = counterSlice.actions;
export const { login, logout } = authSlice.actions;
export default store;

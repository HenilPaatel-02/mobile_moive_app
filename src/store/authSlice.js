import { getUserSession, loginUser, logoutUser, saveUser } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunks
//thunkAPI used to dispatch other actions or get state

// Load Session
export const loadSessionThunk = createAsyncThunk(
  "auth/loadSession",
  async (_, thunkAPI) => {
    try {
      const user = await getUserSession();
      return user; // can be null
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// Login
export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      return await loginUser(email, password);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// Register
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await saveUser(userData);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// Logout
export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  await logoutUser();
  return true;
});

//STATE SLICE
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,
    error: null,
  },
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // load session
      .addCase(loadSessionThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadSessionThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loadSessionThunk.rejected, (state) => {
        state.user = null;
        state.loading = false;
      })

      //login
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //register
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //logout
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;

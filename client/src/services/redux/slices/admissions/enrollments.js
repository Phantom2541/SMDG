import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axioKit } from "../../../utilities";

const name = "admissions/enrollments";

const initialState = {
  collections: [],
  response: {},
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const BROWSE = createAsyncThunk(
  `${name}/browse`,
  ({ key, token }, thunkAPI) => {
    try {
      return axioKit.universal(`${name}/browse`, token, key);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const SAVE = createAsyncThunk(
  `${name}/save`,
  ({ data, token }, thunkAPI) => {
    try {
      return axioKit.save(name, data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const UPDATE = createAsyncThunk(
  `${name}/update`,
  ({ token, data }, thunkAPI) => {
    try {
      return axioKit.update(name, data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const reduxSlice = createSlice({
  name,
  initialState,
  reducers: {
    RESET: (state) => {
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(BROWSE.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(BROWSE.fulfilled, (state, action) => {
        const { payload } = action.payload;
        state.collections = payload;
        state.isLoading = false;
      })
      .addCase(BROWSE.rejected, (state, action) => {
        const { error } = action;
        state.message = error.message;
        state.isLoading = false;
      })

      .addCase(SAVE.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(SAVE.fulfilled, (state, action) => {
        const { success, payload } = action.payload;
        //   { enrollment, user } = payload;

        // if (enrollment?.isPublished) {
        //   socket.emit("send_employment", { ...employment, user });
        // }

        state.message = success;
        state.response = payload;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(SAVE.rejected, (state, action) => {
        const { error } = action;
        state.message = error.message;
        state.isLoading = false;
      })

      .addCase(UPDATE.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(UPDATE.fulfilled, (state, action) => {
        const { success, payload, isViewing } = action.payload,
          { user, enrollment } = payload;

        if (isViewing) {
          switch (enrollment.status) {
            case "rejected":
              state.message = "The enrollment application has been declined.";
              break;

            case "validated":
              state.message = "Enrollment validation is complete.";
              break;

            case "paid":
              state.message =
                "Payment for the enrollment has been processed and confirmed.";
              break;

            default:
              state.message = "The enrollment has been approved.";
              break;
          }

          const index = state.collections.findIndex(
            ({ _id }) => _id === enrollment._id
          );

          state.collections.splice(index, 1);
        } else {
          state.response = payload;
          state.message = success;
        }

        // if (user) {

        //   if (employment?.isPublished) {
        //     socket.emit("send_employment", { ...employment, user });
        //   }
        // } else {
        //   const index = state.collections.findIndex(
        //     (c) => c._id === employment._id
        //   );

        //   state.collections.splice(index, 1);
        //   state.message = "Employment Approved Successfully";
        // }

        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(UPDATE.rejected, (state, action) => {
        const { error } = action;
        state.message = error.message;
        state.isLoading = false;
      });
  },
});

export const { RESET } = reduxSlice.actions;

export default reduxSlice.reducer;

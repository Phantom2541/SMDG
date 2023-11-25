import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axioKit, bulkPayload } from "../../../utilities";

const name = "admissions/requirements";

const initialState = {
  collections: [
    { title: "1 x 1 Photo", department: "grade" },
    { title: "Form 138", department: "junior" },
    { title: "Parent's Consent", department: "senior" },
    { title: "Medical Certificate", department: "college" },
    { title: "Report Card", department: "grade" },
    { title: "Identification Card", department: "junior" },
    { title: "Transcript of Records", department: "senior" },
    { title: "Application Form", department: "college" },
    { title: "Birth Certificate", department: "grade" },
    { title: "Recommendation Letters", department: "junior" },
    { title: "Admission Test Results", department: "senior" },
    { title: "Resume", department: "college" },
    { title: "School ID", department: "grade" },
    { title: "Extracurricular Certificates", department: "junior" },
    { title: "Financial Aid Application", department: "senior" },
    { title: "Passport-sized Photo", department: "grade" },
    { title: "Duly Accomplished Form", department: "junior" },
    { title: "Parent/Guardian Signature", department: "senior" },
    { title: "Health Certificate", department: "college" },
    { title: "Academic Transcript", department: "grade" },
    { title: "Student ID Card", department: "junior" },
    { title: "Recommendation Letters", department: "senior" },
    { title: "Application Essay", department: "college" },
    { title: "Birth Certificate", department: "grade" },
    { title: "Extracurricular Achievements", department: "junior" },
    { title: "Entrance Exam Results", department: "senior" },
    { title: "Resume/CV", department: "college" },
    { title: "Parental Income Statement", department: "grade" },
    { title: "Community Service Records", department: "junior" },
    { title: "Scholarship Application Form", department: "senior" },
  ],
  showModal: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const BROWSE = createAsyncThunk(
  `${name}/browse`,
  ({ token, key }, thunkAPI) => {
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
  ({ token, data }, thunkAPI) => {
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

export const DESTROY = createAsyncThunk(
  `${name}/destroy`,
  ({ token, data }, thunkAPI) => {
    try {
      return axioKit.destroy(name, data, token);
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
    RESET: (state, data) => {
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(SAVE.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(SAVE.fulfilled, (state, action) => {
        const { success, payload } = action.payload;
        state.message = success;
        state.collections.unshift(payload);
        state.showModal = false;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(SAVE.rejected, (state, action) => {
        const { error } = action;
        state.showModal = false;
        state.message = error.message;
        state.isLoading = false;
      })

      .addCase(UPDATE.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(UPDATE.fulfilled, (state, action) => {
        const { success, payload } = action.payload;

        const index = state.collections.findIndex((c) => c._id === payload._id);
        state.collections[index] = payload;

        state.showModal = false;
        state.message = success;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(UPDATE.rejected, (state, action) => {
        const { error } = action;
        state.showModal = false;
        state.message = error.message;
        state.isLoading = false;
      })

      .addCase(DESTROY.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(DESTROY.fulfilled, (state, action) => {
        const { success, payload } = action.payload;

        bulkPayload(state, payload, false);

        state.showModal = false;
        state.message = success;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(DESTROY.rejected, (state, action) => {
        const { error } = action;
        state.showModal = false;
        state.message = error.message;
        state.isLoading = false;
      })

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
      }),
});

export const { RESET } = reduxSlice.actions;

export default reduxSlice.reducer;

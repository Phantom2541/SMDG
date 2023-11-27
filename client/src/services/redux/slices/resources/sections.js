import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axioKit, bulkPayload } from "../../../utilities";

const name = "resources/sections";

const initialState = {
  collections: [
    {
      name: "Matapang",
      gradeLvl: "junior high school",
      advisor: "Kevin Magtalas",
    },
    {
      name: "Courageous",
      gradeLvl: "senior high school",
      advisor: "Sarah Johnson",
    },
    {
      name: "Bravehearts",
      gradeLvl: "elementary school",
      advisor: "Michael Smith",
    },
    {
      name: "Fearless",
      gradeLvl: "junior high school",
      advisor: "Emily Watson",
    },
    {
      name: "Resilient",
      gradeLvl: "senior high school",
      advisor: "Daniel Garcia",
    },
    {
      name: "Warriors",
      gradeLvl: "elementary school",
      advisor: "Jessica Brown",
    },
    {
      name: "Determined",
      gradeLvl: "junior high school",
      advisor: "Andrew Thompson",
    },
    {
      name: "Persistent",
      gradeLvl: "senior high school",
      advisor: "Olivia Martinez",
    },
    {
      name: "Adventurous",
      gradeLvl: "elementary school",
      advisor: "Liam Davis",
    },
    {
      name: "Explorers",
      gradeLvl: "junior high school",
      advisor: "Sophia Rodriguez",
    },
    {
      name: "Innovators",
      gradeLvl: "senior high school",
      advisor: "Noah Wilson",
    },
    {
      name: "Trailblazers",
      gradeLvl: "elementary school",
      advisor: "Ava Taylor",
    },
    {
      name: "Challengers",
      gradeLvl: "junior high school",
      advisor: "Ethan Turner",
    },
    {
      name: "Achievers",
      gradeLvl: "senior high school",
      advisor: "Isabella Clark",
    },
    {
      name: "Leaders",
      gradeLvl: "elementary school",
      advisor: "Mia Lewis",
    },
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

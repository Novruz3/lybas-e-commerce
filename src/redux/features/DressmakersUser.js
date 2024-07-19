import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom, AxiosUser } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
  limit: 16,
  offset: 0,
  count: 0,
  sort: {
    category: [],
    price: {},
    size: [],
    material: [],
    welayat: [],
    color:[],
  },
};
export const fetchDataDressmakersUser = createAsyncThunk('data/fetchDataDressmakersUser', async (_, { getState }) => {
  try {
    const { limit, offset, sort } = getState().DressmakersUser;
    var data = await AxiosCustom(`/seller?limit=${limit}&offset=${offset}&welayat=${sort.welayat}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.log(error.response.data.message)
    const err = error.response.data.message;
    throw error;
  }
});

// Create a slice using Redux Toolkit
const DressmakersUser = createSlice({
  name: 'DressmakersUser',
  initialState,
  reducers: {
    setLimit: (state, action) => {
      console.log('limit');
      state.limit = action.payload;
      state.offset = 0; // Reset the offset when changing the limit
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
      state.data = []
      state.offset = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataDressmakersUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataDressmakersUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data,...action?.payload?.data.sellers];
      })
      .addCase(fetchDataDressmakersUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSort } = DressmakersUser.actions;
export default DressmakersUser.reducer;
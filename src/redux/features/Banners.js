import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
};
export const fetchDataBanners = createAsyncThunk('data/fetchDataBanners', async (_, { getState }) => {
  try {
    const data = await AxiosCustom(`/banners?limit=10000&filter={}`);
    return data;
  } catch (error) {
    console.log(error.response.data.message)
    throw error;
  }
});

// Create a slice using Redux Toolkit
const Banners = createSlice({
  name: 'Banners',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action?.payload?.data.data];
      })
      .addCase(fetchDataBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSearch, setFilter } = Banners.actions;
export default Banners.reducer;

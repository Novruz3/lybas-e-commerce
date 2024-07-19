import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosSeller } from '../../common/AxiosInstance.js'

const initialState = {
  data: {},
  loading: false,
  error: null,
};
export const fetchDataStatistics = createAsyncThunk('data/fetchDataStatistics', async (_, { getState }) => {
  try {
    const data = await AxiosSeller(`/stats`);
    return data;
  } catch (error) {
    console.log(error.response.data.message)
    throw error;
  }
});

// Create a slice using Redux Toolkit
const Statistics = createSlice({
  name: 'Statistics',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.data = {...action?.payload?.data};
      })
      .addCase(fetchDataStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSearch, setFilter } = Statistics.actions;
export default Statistics.reducer;

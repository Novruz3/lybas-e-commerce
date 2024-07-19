import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosSeller } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
};
export const fetchDataDayStatistics = createAsyncThunk('data/fetchDataDayStatistics', async (_, { getState }) => {
  try {
    const data = await AxiosSeller(`/orders/daily`);
    console.log(data,12312);
    return data;
  } catch (error) {
    console.log(error.response.data.message)
    throw error;
  }
});

// Create a slice using Redux Toolkit
const DayStatistics = createSlice({
  name: 'DayStatistics',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataDayStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataDayStatistics.fulfilled, (state, action) => {
        state.loading = false;
        console.log('ahh');
        state.data = action?.payload?.data;
      })
      .addCase(fetchDataDayStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSearch, setFilter } = DayStatistics.actions;
export default DayStatistics.reducer;

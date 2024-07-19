import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
  sort:'',  //3 teklip  //2 popuplar //4 onsale
};
export const fetchDataDressmakers = createAsyncThunk('data/fetchDataDressmakers', async (_, { getState }) => {
  try {
    const data = await AxiosCustom(`/products?limit=10000`);
    return data;
  } catch (error) {
    console.log(error.response.data.message)
    const err = error.response.data.message;
    if (err === 'jwt expired') {
      localStorage.clear('lybas-token')
    }
    throw error;
  }
});

// Create a slice using Redux Toolkit
const Dressmakers = createSlice({
  name: 'Dressmakers',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataDressmakers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataDressmakers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action?.payload?.data.data];
      })
      .addCase(fetchDataDressmakers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const {  } = Dressmakers.actions;
export default Dressmakers.reducer;

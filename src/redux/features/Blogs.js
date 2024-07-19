import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
  sort:'',  //3 teklip  //2 popuplar //4 onsale
};
export const fetchDataBlogs = createAsyncThunk('data/fetchDataBlogs', async (_, { getState }) => {
  try {
    const data = await AxiosCustom(`/blogs?limit=10000`);
    console.log(data,'products')
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
const Blogs = createSlice({
  name: 'Blogs',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action?.payload?.data.data];
      })
      .addCase(fetchDataBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const {  } = Blogs.actions;
export default Blogs.reducer;

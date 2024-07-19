import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom, AxiosUser } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
  limit: 8,
  offset: 0,
};
export const fetchDataBlogsUser = createAsyncThunk('data/fetchDataBlogsUser', async (_, { getState }) => {
  try {
    const { limit, offset } = getState().BlogsUser;
    console.log(limit,offset);
    var data = await AxiosCustom(`/blogs?limit=${limit}&offset=${offset}`);
    console.log(data,'test');
    return data;
  } catch (error) {
    console.log(error);
    console.log(error.response.data.message)
    const err = error.response.data.message;
    throw error;
  }
});

// Create a slice using Redux Toolkit
const BlogsUser = createSlice({
  name: 'BlogsUser',
  initialState,
  reducers: {
    setLimit: (state, action) => {
      console.log('limit');
      state.limit = action.payload;
      state.offset = 0; // Reset the offset when changing the limit
    },
    setOffset: (state, action) => {
      console.log(action.payload,123);
      state.offset = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataBlogsUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataBlogsUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data,...action?.payload?.data?.data];
      })
      .addCase(fetchDataBlogsUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset } = BlogsUser.actions;
export default BlogsUser.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom, AxiosSeller } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
  limit: 5,
  offset: 0,
  count: 0,
  search: '',
  filter:''
};
export const fetchDataComments = createAsyncThunk('data/fetchDataComments', async (_, { getState }) => {
  try {
    const { limit, offset, filter, search } = getState().Comments;
    const data = await AxiosSeller(`/comments?limit=${limit}&offset=${offset}&keyword=${search}&filter=${JSON.stringify(filter)}`);
    console.log(data,'comments seller');
    return data;
  } catch (error) {
    console.log(error.response.data.message)
    const err = error.response.data.message;
    if (err === 'jwt expired') {
      window.location.reload('/')
      localStorage.clear('lybas-seller-token')
    }
    throw error;
  }
});

// Create a slice using Redux Toolkit
const Comments = createSlice({
  name: 'Comments',
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
      state.offset = 0; // Reset the offset when changing the limit
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action?.payload?.data.data];
        state.count = action?.payload.data.count;
      })
      .addCase(fetchDataComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSearch, setFilter } = Comments.actions;
export default Comments.reducer;

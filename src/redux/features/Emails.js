import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom, AxiosSeller } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
  limit: 5,
  offset: 0,
  count: 0,
  notRead:0,
  search: '',
  filter: {},
  type: '',
};
export const fetchDataEmails = createAsyncThunk('data/fetchDataEmails', async (_, { getState }) => {
  try {
    const { limit, offset, search, filter, type } = getState().Emails;
    const data = await AxiosSeller(`/mails?limit=${limit}&offset=${offset}&keyword=${search}&filter=${JSON.stringify(filter)}&type=${type}`);
    return data;
  } catch (error) {
    console.log(error.response.data.message)
    const err = error.response.data.message;
    if (err === 'jwt expired') {
      window.location.reload('/')
      localStorage.clear('lybas-seller-token')
      localStorage.clear('lybas-seller')
    }
    throw error;
  }
});

// Create a slice using Redux Toolkit
const Emails = createSlice({
  name: 'Emails',
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
      state.offset = 0
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.offset = 0
    },
    setType: (state, action) => {
      state.type = action.payload;
      state.offset = 0
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataEmails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataEmails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action?.payload?.data.data];
        state.count = action?.payload.data.count;
        state.notRead = action?.payload.data.notRead;
      })
      .addCase(fetchDataEmails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSearch, setFilter, setType } = Emails.actions;
export default Emails.reducer;

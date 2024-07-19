import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
  limit: 1000,
  offset: 0,
  count: 0,
  search: ''
};
export const fetchDataMaterials = createAsyncThunk('data/fetchDataMaterials', async (_, { getState }) => {
  try {
    const { limit, offset } = getState().Materials;
    const data = await AxiosCustom(`/materials?limit=${limit}&offset=${offset}`);
    return data;
  } catch (error) {
    console.log(error.response.data.message)
    const err = error.response.data.message;
    if (err === 'jwt expired') {
      localStorage.clear('lybas-seller-token')
      localStorage.clear('lybas-seller')
      window.location.reload('/')
    }
    throw error;
  }
});

// Create a slice using Redux Toolkit
const Materials = createSlice({
  name: 'Materials',
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataMaterials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataMaterials.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action?.payload?.data.data];
        state.count = action?.payload.data.count;
      })
      .addCase(fetchDataMaterials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSearch } = Materials.actions;
export default Materials.reducer;

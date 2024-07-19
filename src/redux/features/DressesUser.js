import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom, AxiosUser } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
  limit: 12,
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
  type:2
};
export const fetchDataDressesUser = createAsyncThunk('data/fetchDataDressesUser', async (_, { getState }) => {
  try {
    const { limit, offset, sort, type } = getState().DressesUser;
    if(localStorage.getItem('lybas-user-token')){
      var data = await AxiosUser(`/products?limit=${limit}&offset=${offset}&filter=${JSON.stringify(sort)}&sort=${type}`);
    }else{
      var data = await AxiosCustom(`/products?limit=${limit}&offset=${offset}&filter=${JSON.stringify(sort)}&sort=${type}`);
    }
    return data;
  } catch (error) {
    console.log(error);
    console.log(error.response.data.message)
    const err = error.response.data.message;
    throw error;
  }
});

// Create a slice using Redux Toolkit
const DressesUser = createSlice({
  name: 'DressesUser',
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
    setSort: (state, action) => {
      console.log(("object"));
      state.sort = action.payload;
      state.offset = 0
      state.data = []
    },
    setType: (state, action) => {
      state.type = action.payload;
      state.offset = 0;
      state.data = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataDressesUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataDressesUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data,...action?.payload?.data];
        state.count = action?.payload?.count;
      })
      .addCase(fetchDataDressesUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSort, setType } = DressesUser.actions;
export default DressesUser.reducer;

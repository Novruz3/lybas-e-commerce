import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom, AxiosUser } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
};
export const fetchDataCart = createAsyncThunk('data/fetchDataCart', async (_, { getState }) => {
  try {
    const data = await AxiosUser(`/not-ordered`);
    return data;
  } catch (error) {
    console.log(error.response.data.message)
    if(error.response.status === 401){
      localStorage.setItem('lybas-user','');
      localStorage.setItem('lybas-user-token','');
      window.location.reload('/')
    }
    throw error;
  }
});

// Create a slice using Redux Toolkit
const Cart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    setCartEmpty: (state, action) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataCart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action?.payload?.data.data];
      })
      .addCase(fetchDataCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSearch, setFilter,setCartEmpty } = Cart.actions;
export default Cart.reducer;

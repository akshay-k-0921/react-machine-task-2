import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import {Api} from '../apiConfig/axiosConfig'; 


export const fetchList = createAsyncThunk('list/fetchList', async () => {
    try {
      const response = await Api.get('db0018c8-5982-4d89-a54f-f51fe14d3c89/'); // Replace 'endpoint' with your API endpoint
      console.log(response.data.data,"response");
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch list');
    }
  });

const listSlice = createSlice({
  name: 'list',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchListStart(state) {
      state.loading = true;
      state.error = null;
      console.log('loading');
    },
    fetchListSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
      console.log('success');
    },
    fetchListFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      console.log('failed'); 
    },
  },
});


export const { fetchListStart, fetchListSuccess, fetchListFailure } = listSlice.actions;
export default listSlice.reducer;
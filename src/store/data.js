import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../apiConfig/axiosConfig';

const initialState = {
  items: null,
  loading: false,
  error: null,
};

export const fetchList = createAsyncThunk('list/fetchList', async () => {
  try {
    const response = await Api.get('db0018c8-5982-4d89-a54f-f51fe14d3c89/'); // Replace 'endpoint' with your API endpoint
    console.log(response.data.data[0].table_menu_list, "response");
    return response.data.data[0].table_menu_list;
  } catch (error) {
    throw new Error('Failed to fetch list');
  }
});

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the action creators
export const { fetchListStart, fetchListSuccess, fetchListFailure } = listSlice.actions;

export default listSlice.reducer;

const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    update(state, action) {
      state.value = action.payload;
    },
  },
});

export const { update } = filterSlice.actions;

export default filterSlice;


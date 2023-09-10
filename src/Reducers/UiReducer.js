const { createSlice } = require('@reduxjs/toolkit');

const UiReducer = createSlice({
	name: 'ui',
	initialState: {
		pincode: null,
	},
	reducers: {
		Pin(state, action) {
			state.pincode = action.payload;
		},
	},
});

const { actions } = UiReducer;

export const { Pin } = actions;

export default UiReducer;

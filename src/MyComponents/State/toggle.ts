import { createSlice } from "@reduxjs/toolkit";

interface  toggleState {
    value : boolean;
}
const initialState: toggleState ={
    value: false
};

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleValue: (state) => {
            state.value = !state.value;
          }
    },  
})
export const {toggleValue} = toggleSlice.actions

export default toggleSlice.reducer;
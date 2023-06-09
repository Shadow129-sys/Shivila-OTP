import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchState: {}
    },
    reducers: {
        getSearchState: (state, action) => {
            state.searchState = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { getSearchState } = searchSlice.actions;

export default searchSlice.reducer;

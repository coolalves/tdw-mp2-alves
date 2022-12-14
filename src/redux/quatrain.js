import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    quatrain: [],
    author: "",
};


export const quatrainSlice = createSlice({
    name: "quatrain",
    initialState,
    reducers: {
        saveQuatrain: (state, action) => {
            state.title = action.payload.title;
            state.quatrain = action.payload.quatrain;
            state.author = action.payload.author;
        },
        resetQuatrain: (state) => {
            state.title = "";
            state.quatrain = [];
            state.author = "";
        }
    }
});

// Action creators are generated for each case reducer function
export const { saveQuatrain, resetQuatrain } = quatrainSlice.actions;

export default quatrainSlice.reducer;
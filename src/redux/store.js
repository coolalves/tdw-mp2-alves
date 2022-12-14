import { configureStore } from "@reduxjs/toolkit";
import quatrainSlice from "./quatrain";

export default configureStore({
    reducer: {
        quatrain: quatrainSlice,
    }
});
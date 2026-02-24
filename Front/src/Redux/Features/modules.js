import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    error: null,
    isLoading: false,
};

const modulesSlice = createSlice({
    name: 'modules',
    initialState,
    reducers: {
        setModulesData: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setModulesData, setError, setIsLoading } = modulesSlice.actions;
export default modulesSlice.reducer;
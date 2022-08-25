import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetch } from "./counterAsyncRequest";

const initialState = {
    value: 0,
    status: 'idle'
};


/*
    Code says async function
*/
export const incrementAsync() = createAsyncThunk(
    `counterAsyncRequest/fetch`,
    async (amount) => {
        const response = await fetch(amount);
        return response.data;
    }
);

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            ++state.value;
        },
        decerement: (state) => {
            --state.value;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfille, (state,action) => {
                state.status = 'idle';
                state.value += action.payload;
            });
    }
});

export const { increment, decerement, incrementByAmount } = counterSlice.action;

export const selectCount = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if(currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
    }
};

export default counterSlice.reducer;
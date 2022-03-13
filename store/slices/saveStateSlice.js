import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedState: [],
    timeLineOfState: []
};

const savedStateFromSlice = [];

const saveStateSlice = createSlice({
    name: "saveState",
    initialState,
    reducers: {
        saveToRedux: (state, action) => {
            state.timeLineOfState.push(action.payload);
        },
        revertState: (state, action) => {
            if (state.timeLineOfState.length > 0) {
                state.timeLineOfState.pop();
            }
        },
        saveToDb: (state) => {
            /*
                save the current state to the database when the save button is clicked
            */
        }
    }
});

export const { saveToRedux, exportFromRedux, saveToDb, revertState } = saveStateSlice.actions;

export default saveStateSlice.reducer;

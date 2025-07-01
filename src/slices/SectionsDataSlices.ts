import { createSlice } from '@reduxjs/toolkit';
import { DataSectionsProps } from '../interface';

const initialState: DataSectionsProps = {
    data: [],
};

const SectionsDataSlices = createSlice({
    name: 'dataSlices',
    initialState,
    reducers: {
        AddNewSection(state, { payload }) {
            // state.data.push(payload)
            return {
                ...state,
                payload,
            };
        },
    },
});

export default SectionsDataSlices.reducer;

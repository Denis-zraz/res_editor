import { createSlice } from '@reduxjs/toolkit';
import { DataSectionsProps } from '../interface';

const initialState: DataSectionsProps = {
    data: [],
};

const SectionsDataSlices = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addNewSection(state, { payload }) {
            state.data.push(payload);
        },
        deleteSection(state, { payload }) {
            state.data = state.data.filter((elem) => elem.id !== payload);
        },
        editSection(state, { payload }) {            state.data = state.data.map((elem) => {
                if (elem.id === payload.id) {
                    return payload;
                } else {
                    return elem;
                }
            });
        },
    },
});

export const { addNewSection, deleteSection, editSection } =
    SectionsDataSlices.actions;

export default SectionsDataSlices.reducer;

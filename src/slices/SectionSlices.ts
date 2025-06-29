import { createSlice } from '@reduxjs/toolkit';
import { Section } from '../interface';

const initialState: Section = {
    Experience: false,
    Education: false,
    Skills: false,
    AboutMe: false,
};

const SectionSlices = createSlice({
    name: 'sections',
    initialState,
    reducers: {
        toggleActiveSections(state, { payload }) {
            console.log(state);
            console.log(payload);
        },
    },
});

export const { toggleActiveSections } = SectionSlices.actions;
export default SectionSlices.reducer;

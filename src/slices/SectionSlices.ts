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
            switch(payload) {
                case 'Experience':
                    console.log(payload)
                    return { ...state, Experience: !state.Experience };
                case 'Education':
                    return { ...state, Education: !state.Education}
                case 'Skills':
                    return { ...state, Skills: !state.Skills };
                case 'AboutMe':
                    return { ...state, AboutMe: !state.AboutMe}
                default: state;
            }
        },
    },
});

export const { toggleActiveSections } = SectionSlices.actions;
export default SectionSlices.reducer;

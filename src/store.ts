import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import SectionSlices from './slices/SectionSlices';
import SectionDataSlices from './slices/SectionsDataSlices';

const store = configureStore({
    reducer: {
        sections: SectionSlices,
        data: SectionDataSlices,
    },
});

setupListeners(store.dispatch);

export default store;

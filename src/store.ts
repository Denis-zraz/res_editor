import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import SectionSlices from './slices/SectionSlices';

const store = configureStore({
    reducer: {
        sections: SectionSlices,
    },
});

setupListeners(store.dispatch);

export default store;

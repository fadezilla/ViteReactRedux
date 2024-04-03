import { configureStore, createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts(state, action) {
            return action.payload;
        },
    },
});

export const { setProducts } = productSlice.actions;

export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
    },
});
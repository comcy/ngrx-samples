import { Product } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// TYPES

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}

export interface State extends fromRoot.State {
    products: ProductState;
}

const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
};

// SELECTORS

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

// REDUCER

export function reducer(state = initialState, action): ProductState {

    switch (action.type) {

        case 'TOGGLE_PRODUCT_CODE':
        console.log('existing state: ' + JSON.stringify(state));
        console.log('payload: ' + action.payload);

        return {
            ...state,
            showProductCode: action.payload
        };

        default:
            return state;
    }
}

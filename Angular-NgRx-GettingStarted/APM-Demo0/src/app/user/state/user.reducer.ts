import { User } from '../user';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

export interface State extends fromRoot.State {
    user: UserState;
}

const initialState: UserState = {
    maskUserName: false,
    currentUser: null
};

const getUserFeatureState = createFeatureSelector<UserState>('products');

export const getMaskUsername = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
);

export function reducer(state = initialState, action): UserState {

    switch (action.type) {

        case 'MASK_USER_NAME':
            console.log('existing state: ' + JSON.stringify(state));
            console.log('payload: ' + action.payload);

            return {
                ...state,
                maskUserName: action.payload
            };

        default:
            return state;
    }
}

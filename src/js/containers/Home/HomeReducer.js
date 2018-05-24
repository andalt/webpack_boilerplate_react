import * as actionTypes from './HomeActionTypes';

const initialState = {
    count: 0
};

export const HomeReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case actionTypes.APP_INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };

        case actionTypes.APP_DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };

        default: return state;
    }
};

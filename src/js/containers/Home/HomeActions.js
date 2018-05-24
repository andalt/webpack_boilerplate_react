import * as actionTypes from './HomeActionTypes';

export const increment = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.APP_INCREMENT
        });
    };
};

export const decrement = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.APP_DECREMENT
        });
    };
};

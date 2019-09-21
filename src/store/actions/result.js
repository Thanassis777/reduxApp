import * as actionTypes from './actionTypes';


// asynch method
export const saveResult = res => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            
            dispatch(saveResult(res));
        }, 2000);
    }
};
// end of asynch method


export const deleteResult = (res) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: res
    }
};
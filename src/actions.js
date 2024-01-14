import { CHANGE_SEARCH_FIELD, REQUEST_KITTENS_FAILURE, REQUEST_KITTENS_PENDING,REQUEST_KITTENS_SUCCESS} from './constants.js';
import { getKittens } from './api/getKittens.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

/**
 * thunk middleware waits for a function to be returned
 * 
 * @param {*} dispatch 
 */
export const requestKittens = () => (dispatch) => {
    dispatch({ type: REQUEST_KITTENS_PENDING });
    getKittens()
      .then(data => dispatch({ type: REQUEST_KITTENS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_KITTENS_FAILURE, payload: error }));
}

import { CHANGE_SEARCH_FIELD, REQUEST_KITTENS_FAILURE, REQUEST_KITTENS_PENDING, REQUEST_KITTENS_SUCCESS } from './constants.js';

const initialStateSearch = {
    searchField: ''
}

export const searchKittens = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateKittens = {
    isPending: false,
    kittens: [],
    //error: ''
}

export const requestKittens = (state=initialStateKittens, action={}) => {
    switch(action.type){
        case REQUEST_KITTENS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_KITTENS_SUCCESS:
            return Object.assign({}, state, { kittens: action.payload, isPending: false })
        case REQUEST_KITTENS_FAILURE:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}
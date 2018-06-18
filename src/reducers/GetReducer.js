import { FETCH_POST, NEW_POST } from '../actions/Types';

const initialState = {
    items: [],
    item : {}
}

const getReducer = function(state = initialState, action) {
    console.log(FETCH_POST);
    switch(action.type) {
        case FETCH_POST:
            state = Object.assign({},state,{items:action.payload});
            return state;
        default: 
            return state;
    }
}

export default getReducer;
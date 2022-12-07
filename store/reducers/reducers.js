import { combineReducers } from "redux";

//importar reducer functions aqui
function dataReducer(state = null, action) {
    switch (action.type) {
        case 'SET_DATA':
            return action.data;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    //reducer functions aqui
    dataReducer
})

export default rootReducer;
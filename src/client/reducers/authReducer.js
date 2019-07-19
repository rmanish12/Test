import {LOGIN, REGISTER} from '../action/types'

export default function authReducer(state = {}, action) {
    switch(action.type) {

        case LOGIN: 
            return {
                    ...state,
                    name: action.payload.name
                }

        case REGISTER:
            return {...state}

        default:
            return state
    }
}
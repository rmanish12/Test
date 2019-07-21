import {LOGIN, REGISTER_SUCCESSFUL, REGISTER_ERROR, LOGOUT, GET_USER} from '../action/types'

export default function authReducer(state = {}, action) {
    switch(action.type) {

        case LOGIN: 
            return {
                ...state
            }

        case GET_USER:
            return {
                ...state,
                name: action.payload.name,
                role: action.payload.role
            }

        case REGISTER_SUCCESSFUL:
            return {
                ...state,
                err: action.payload.err
            }

        case REGISTER_ERROR:
            return {
                ...state,
                msg: action.payload.msg
            }

        case LOGOUT:
            return {}

        default:
            return state
    }
}
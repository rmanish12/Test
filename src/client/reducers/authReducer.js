import {LOGIN_SUCCESSFUL, LOGIN_ERROR, REGISTER_SUCCESSFUL, REGISTER_ERROR, LOGOUT, GET_USER, REGISTER} from '../action/types'

export default function authReducer(state = {}, action) {
    switch(action.type) {

        case LOGIN_SUCCESSFUL: 
            return {
                ...state,
                name: action.payload.name,
                role: action.payload.role
            }

        case LOGIN_ERROR:
            return {
                ...state,
                loginErrMsg: action.payload.errMsg
            }

        case GET_USER:
            return {
                ...state,
                name: action.payload.name,
                role: action.payload.role
            }

        case REGISTER:
            console.log('reducer: ', action.payload.message)
            return {
                ...state,
                message: action.payload.message
            }

        case LOGOUT:
            return {}

        default:
            return state
    }
}
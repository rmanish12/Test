import {LOGIN, REGISTER_SUCCESSFUL, REGISTER_ERROR, LOGOUT, GET_USER} from './types'

import axios from 'axios'

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*"
}

export const onLogin = (email, password) => dispatch => {
    console.log('Action: email: ', email, ' password: ', password)

    axios.post('http://localhost:8000/api/login', {email, password}, headers)
        .then((response) => {
            console.log('data: ', response)
            dispatch({
                type: LOGIN
            }
        )
        })
}

export const fetchUserDetails = () => dispatch => {
    axios.get('http://localhost:8000/api/user', headers)
        .then((response) => {
            dispatch({
                type: GET_USER,
                payload: {
                    name: response.data.user.name,
                    role: response.data.user.role
                }
            })
        })
}

export const onLogout = () => dispatch => {
    console.log('Logout action')
    axios.post('http://localhost:8000/api/logout', {}, headers)
        .then(() => {
            dispatch({
                type: LOGOUT
            })
        })
}

export const onRegister = (email, password, firstname, lastname) => dispatch => {
    const newUser = {
        email,
        password,
        firstname,
        lastname
    }

    axios.post('http://localhost:8000/api/user', headers, newUser)
        .then((response) => {
            if(response.data.err){
                dispatch({
                    type: REGISTER_SUCCESSFUL,
                    payload: {
                        err: response.data.err
                    }
                })
            } else {
                dispatch({
                    type: REGISTER_ERROR,
                    payload: {
                        msg: response.data.msg
                    }
                })
            }
        })
}
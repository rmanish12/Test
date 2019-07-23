import {LOGIN_SUCCESSFUL, LOGIN_ERROR,  REGISTER_SUCCESSFUL, REGISTER_ERROR, LOGOUT, GET_USER, REGISTER} from './types'

import axios from 'axios'
import _ from 'lodash'
import history from '../history' 

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*"
}

export const onLogin = (email, password) => dispatch => {
    axios.post('http://localhost:8000/api/login', {email, password}, headers)
        .then((response) => {
                dispatch({
                    type: LOGIN_SUCCESSFUL,
                    payload: {
                        name: response.data.name,
                        role: response.data.role
                    }
                }
            )
            history.push('/home')
        }, (err) => {
            dispatch({
                type: LOGIN_ERROR,
                payload: {
                    errMsg: _.get(err, 'response.data.message')
                }
            })
        })
}

export const fetchUserDetails = () => dispatch => {
    axios.get('http://localhost:8000/api/user', headers)
        .then((response) => {
            console.log(response)
            dispatch({
                type: GET_USER,
                payload: {
                    name: response.data.user.name,
                    role: response.data.user.role
                }
            }, (err) => {
                console.log(err)
            })
        })
}

export const onLogout = () => dispatch => {
    axios.post('http://localhost:8000/api/logout', {}, headers)
        .then(() => {
            dispatch({
                type: LOGOUT
            })
        })
}

export const onRegister = (email, password, firstname, lastname) => dispatch => {

    axios.post('http://localhost:8000/api/user', {email, password, firstname, lastname}, headers)
        .then((response) => {
            console.log(response) 
            dispatch({
                type: REGISTER,
                payload: {
                    message: response.data.message
                }
            })
        }, (err) => {
            console.log(_.get(err, 'response.data.message'))
            dispatch({
                type: REGISTER,
                payload: {
                    message: _.get(err, 'response.data.message')
                }
            })
        })
}
import axios from 'axios';
import { CHANGE_LOGIN_STATE, LOGIN_OUT } from './constants';

const loginAction = () => ({
    type : CHANGE_LOGIN_STATE,
    res: true
})

export const loginout = () => ({
    type : LOGIN_OUT,
    res: false
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/loginIn.json?account=' + account + '&password=' + password ).then((res) => {
            if (res) {
                dispatch(loginAction())
            }
        }).catch((err) => {
            alert('账号或者密码错误')
        }) 
    }
}
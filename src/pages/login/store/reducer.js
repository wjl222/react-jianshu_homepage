import { fromJS } from 'immutable';
import { CHANGE_LOGIN_STATE, LOGIN_OUT } from './constants';

const defaultState = fromJS({
    isLogin: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN_STATE:
            return state.set('isLogin',action.res);
        case LOGIN_OUT: 
            return state.set('isLogin',action.res)
        default: 
          return state
    }
}
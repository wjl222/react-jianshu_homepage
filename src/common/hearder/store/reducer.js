import * as actionStatic from './actionStatic';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focus: false,
    mouseIn: false,
    historyList: [],
    page: 1,
    totelPage: 1,
})

//什么是纯函数；

export default (state = defaultState, action) => {
    //immutable对象的set方法，会结合之前的immutable对象
    //设置她的值，是会返回一个全新的对象；
    switch (action.type) {
        case actionStatic.INPUT_BE_FOCUS:
            return state.set('focus', true);
        case actionStatic.INPUT_BE_BLUR:
            return state.set('focus', false);
        case actionStatic.CHANGE_HEADER_LIST:
            return state.set('historyList', action.value).set('totelPage',action.totelPage);
        case actionStatic.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionStatic.MOUSE_OUT:
            return state.set('mouseIn', false);
        case actionStatic.CHANGE_PAGE: 
            return state.set('page',action.page)
        default:
            return state
    }
}
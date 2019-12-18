import axios from 'axios';
import * as actionStatic from './actionStatic';

const listAction = (value,totelPage) => ({
    type: actionStatic.CHANGE_HEADER_LIST,
    value,
    totelPage
})

export const onFocusAction = () => ({
    type: actionStatic.INPUT_BE_FOCUS
})

export const onBlurAction = () => ({
    type: actionStatic.INPUT_BE_BLUR
})

export const onMouseEnter = () => ({
    type: actionStatic.MOUSE_ENTER
})

export const onMouseOut = () => ({
    type: actionStatic.MOUSE_OUT
})

export const changePage = (page) => ({
    type: actionStatic.CHANGE_PAGE,
    page
})

export const getListData = () => ((dispatch)=> {
    axios.get('/api/historyList.json').then((res) => {
        const totelPage = Math.ceil(res.data.data.length / 10)
        const action = listAction(res.data.data,totelPage);
        dispatch(action)
    }).catch(() => {
        console.log('错误')
    }) 
})
import axios from 'axios';
import { RECEIVE_LIST_JSON, MORE_LIST_INFO, CHANGE_SCROLL_SHOW } from './contants';
import { fromJS } from 'immutable'

//action是需要单独抽离出去的

const handleReceive = (newData) => {
    return {
        type: RECEIVE_LIST_JSON,
        list: newData
    }
}

const handleMoreListInfo = (moreListInfo) => ({
    type: MORE_LIST_INFO,
    moreListInfo
})

const handleScrollShowAction = (isScrollShow) => ({
    type: CHANGE_SCROLL_SHOW,
    isScrollShow
})

export const handleReceivezzz = () => ((dispatch) => {
    axios.get('/api/article.json' ).then(
        (res) => {
            const newData = res.data;
            dispatch(handleReceive(newData))
        }
    ).catch((err) => {
        console.log(err)
    })
})

export const getMoreListInfo = (page) => ((dispatch) => {
    axios.get('/api/historyMoreList.json').then(
        (res) => {
            const moreListInfo = fromJS(res.data.listData);
            dispatch(handleMoreListInfo(moreListInfo))
        }
    ).catch((err) => {
        console.log(err)
    })
})

export const handleScrollShow = (res) => ((dispatch) => {
    const newres = fromJS(res)
    dispatch(handleScrollShowAction(newres))
})
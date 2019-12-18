import { fromJS } from 'immutable';
import { RECEIVE_LIST_JSON, MORE_LIST_INFO, CHANGE_SCROLL_SHOW } from './contants'

const defaultState = fromJS({
    list: [],
    article: [],
    reacommendImgUrl: [],
    page: 1,
    isScroll: true
})

const receiveListJson = (state,action) => {
    return  state.merge({
        "list": fromJS(action.list.topicData),
        "article": fromJS(action.list.listData),
        "reacommendImgUrl": fromJS(action.list.ReacommendData)
    })
}

const moreListInfo = (state,action) => {
    return state.set("article", state.get('article').concat(action.moreListInfo));
}

const changeScrollShow = (state,action) => {
    return state.set('isScroll', action.isScrollShow)
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case RECEIVE_LIST_JSON:
            return receiveListJson(state,action)
        case MORE_LIST_INFO:
            return moreListInfo(state,action);
        case CHANGE_SCROLL_SHOW:
            return changeScrollShow(state,action)
        default: return state

    }
}


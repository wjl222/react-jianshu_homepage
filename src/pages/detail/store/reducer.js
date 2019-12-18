import { fromJS } from 'immutable';
import { GET_DETAIL_LIST } from './constants'

const defaultState = fromJS({
    title: '',
    contents: ''
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_DETAIL_LIST:
            return state.merge({
                'title': action.title,
                'contents': action.data
            })
        default: return state
    }
}

import axios from 'axios';
import { fromJS } from 'immutable'
import { GET_DETAIL_LIST } from './constants'

const getListDataAction = (title, data) => ({
    type: GET_DETAIL_LIST,
    title,
    data
})

export const getListData = (id) => ((dispatch) => {
    axios.get('/api/detailList.json?' + id).then(
        (res) => {
            const newRes = fromJS(res.data.data);
            const title = newRes.get('title');
            const data = newRes.get('data');
            const action = getListDataAction(title, data);
            dispatch(action)
        }
    ).catch((err) => {
        console.log(err)
    })
})

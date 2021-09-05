import { GET_STAFF_LIST } from '../actions/types'

const staffRedcuer = (state = {}, action) => {
    switch (action.type) {
        case GET_STAFF_LIST:
            return {
                ...state, state:action.payload
            }
        default:
            return state;
    }
}

export default staffRedcuer;
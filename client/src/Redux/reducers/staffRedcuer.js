import { GET_STAFF_LIST, ADD_STAFF, DELETE_STAFF } from '../actions/types'

const staffRedcuer = (state = [], action) => {
    switch (action.type) {
        case GET_STAFF_LIST:
            debugger
            return [
                ...state, ...action.payload
            ]
        case ADD_STAFF:
            debugger
            return [
                ...state, action.payload
            ]
        case DELETE_STAFF:
            return state.filter((item) => { return item._id !== action.payload._id })

        default:
            return state;
    }
}

export default staffRedcuer;
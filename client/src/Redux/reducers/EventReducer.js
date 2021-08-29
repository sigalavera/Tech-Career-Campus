import { GET_EVENTS, DELETE_EVENT } from '../actions/types'

function EventReducer(state = [{}], action) {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state, ...action.payload
            }
        case DELETE_EVENT:
            return  {...state, ...action.payload} 
        default:
            return state;
    }
}


export default EventReducer;

import { GET_EVENTS,DELETE_EVENT } from "./types"


export const getEvents = (events) => {
    return {
        type: GET_EVENTS,
        payload: events
    }
           
}

export const deleteEvent = (id) =>async dispatch=> {
    await fetch('http://localhost:8080/api/event', {
        method: 'DELETE',
        body: JSON.stringify({
            id:id ,
        }),
        headers: { 'Content-Type': "application/json" }
    }).then(res => res.json())
        .then(res => dispatch({
            type: DELETE_EVENT,
            payload: res.data
        }))
}
           
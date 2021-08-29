import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getEvents, deleteEvent } from '../../../Redux/actions/eventAction';
import { fetchEvents } from '../../../FetchFunctions/FetchFunctions';
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'
const Events = () => {
    const [events, setEvent] = useState()
    // const events = useSelector(state => state.events)
    const dispatch = useDispatch();

    useEffect(() => {
        fetchEvents()
            .then(data => {
             dispatch(getEvents(data.data));
             setEvent(data.data)
            })
    }, [])
    console.log(events);
    return (
        <div>
            Events

            <div style={{ textAlign: "center" }}>
                {
                    events?.map((event) => {
                        return (
                            <>
                                <div key={event._id}>
                                    <small className="text-muted">Date:{event.createdAt}</small>
                                    <br></br>
                                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                    <strong className="me-auto">Title:{event.eventName}</strong>
                                    <small className="text-muted">Message:{event.massage}</small>
                                    <br></br>
                                    <button onClick={() => {
                                        dispatch(deleteEvent(event._id))
                                    }}>Delete</button>
                                </div>
                                <br></br>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Events

import { GET_STAFF_LIST, ADD_STAFF } from "./types";
import fetcher from "../../utils/fetcher";

export const getStaff = () => async dispatch => {

    await fetcher('http://localhost:8080/api/staff')
        .then((response) => dispatch({
            type: GET_STAFF_LIST,
            payload: response.data,
        }
        ))
        .catch((err) => console.log(err));
}

export const addStuff = (stff) => async dispatch => {
    await fetcher('/api/stuff', {
        method: 'PUT',
        body: JSON.stringify({
            stff
        })
            .then(res => res.json())
            .then(res => dispatch({
                type: ADD_STAFF,
                payload: res.data
            }))
            .then(res => console.log(res))
            .catch(error => console.log(error))
    })
}
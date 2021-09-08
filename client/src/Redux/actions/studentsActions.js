import fetcher from '../../utils/fetcher';
import { CREATE_STUDENT, GET_STUDENTS } from './types'
export const getStudents = () => async dispatch => {
    await fetcher("/api/student")
        .then((response) => dispatch({
            type: GET_STUDENTS,
            payload: response.data,
        }))
        .catch((err) => console.log(err));
}
export const createStudent = (newStudent) => async dispatch => {
    await fetcher("/api/staff/register", {
        method: 'POST',
        body: JSON.stringify(newStudent),
    })
        .then((response) => dispatch({
            type: CREATE_STUDENT,
            payload: response.data,
        }))
        .catch((err) => console.log(err));
}

export const deleteStudent = () => async dispatch => {
    await fetcher()
}


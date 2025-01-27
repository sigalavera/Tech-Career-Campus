import fetcher from '../../utils/fetcher';
import { CREATE_STUDENT, CREATE_STUDENT_ERRORS, DELETE_STUDENT, GET_STUDENTS, UPDATE_STUDENT } from './types'
export const getStudents = () => async dispatch => {
    await fetcher("/api/student")
        .then((response) => dispatch({
            type: GET_STUDENTS,
            payload: response.data,
        }))
        .catch((err) => console.log(err));
}
export const createStudent = (newStudent) => async dispatch => {
    try {
        await fetcher("/api/register", {
            method: 'POST',
            body: JSON.stringify(newStudent),
        })
            .then((response) => {
                if (!response.data) throw response
                return response
            })
            .then((response) => dispatch({
                type: CREATE_STUDENT,
                payload: response.data,
            }))
            .catch((err) => { throw err });
    }
    catch (error) {
        dispatch({ type: CREATE_STUDENT_ERRORS, payload: error.errors || error })
    }
}


export const deleteStudent = (studentId) => async dispatch => {
    await fetcher("/api/student/deleteStudent", {
        method: 'DELETE',
        body: JSON.stringify({ _id: studentId })
    }).then(response => dispatch({
        type: DELETE_STUDENT,
        payload: response.data
    }))
        .catch(error => console.log(error))
}

export const updateStudent = (studentUpdate) => async dispatch => {
    const { _id } = { ...studentUpdate };
    delete studentUpdate._id;
    await fetcher("http://localhost:8080/api/student/updateStudent", {
        method: 'PUT',
        body: JSON.stringify({ studentUpdate, _id })
    })
        .then(response => dispatch({
            type: UPDATE_STUDENT,
            payload: response.data
        }))
        .catch(error => console.log(error))
}


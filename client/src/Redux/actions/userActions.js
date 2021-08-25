import { EDIT_GRADE, SET_USER } from './types';
import jwt_decode from "jwt-decode";


export const editGrade = (id) => async dispatch => {
    await fetch(`http://localhost:8080/api/student/updateTest/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: "612004466a18a679004e2f04",
            name: "HTML",
            grade: 70
        }),
        headers: { 'Content-Type': "application/json" }
    }).then(res => res.json())
        .then(res => dispatch({
            type: EDIT_GRADE,
            payload: res.data
        }))
}

export const getUser = (loginInfo) => async dispatch => {
    try {
        await fetch("http://localhost:8080/api/login/login", {
            method: 'POST',
            body: JSON.stringify({
                role: loginInfo.role,
                email: loginInfo.email,
                password: loginInfo.password,
            }),
            headers: { "Content-Type": "application/json" },
        })

            .then((res) => {
                if (!res.ok) throw res.json()
               return res.json()
            })
            .then((res) => localStorage.setItem("jwtToken", res.result))
        if (localStorage.jwtToken) {
            const token = localStorage.getItem("jwtToken")
            const decoded = jwt_decode(token);
            return dispatch({
                type: SET_USER,
                payload: { ...decoded, isConnected: true }
            })

        }
    }
    catch (error) {
        error.then(error => dispatch({
            type: SET_USER,
            payload: { isConnected: false, ...error }
        })
        )
    }
}
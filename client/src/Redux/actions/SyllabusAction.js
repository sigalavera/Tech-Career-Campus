import { GET_SYLLABUS, SELECTED_SYLLABUS } from "./types";


export const getSyllabus = (syllabus) => {
    return {
        type: GET_SYLLABUS,
        payload: syllabus,
    }
}

export const selectedSyllabus = (syllabus) => {
    return {
        type: SELECTED_SYLLABUS,
        payload: syllabus,
    }
}
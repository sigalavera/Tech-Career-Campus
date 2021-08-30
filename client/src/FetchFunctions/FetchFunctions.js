const api = "https://newsapi.org/v2/top-headlines?country=il&category=technology&apiKey="
const api_key = "eacee67e305a4dab808bf7f4f527a643"


export const fetchNewApi = async () => {
    try {
        return await fetch(`${api}${api_key}`)
            .then((res) => res.json())
            .then((response) => response)
            .catch(err => {
                console.error(err);
            });
    } catch (error) {
        console.log(error);
    }

}

export const fetchSyllabus = async () => {
    try {
        return await fetch('http://localhost:8080/api/course',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.jwtToken,
                
              }
        })
            .then((res) => res.json())
            .then((response) => response)
            .catch(err => {
                console.error(err);
            });
    } catch (error) {
        console.log(error);
    }
}

export const fetchEvents = async () => {
    try {
        return await fetch('http://localhost:8080/api/event',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.jwtToken, 
              }
        })
        .then((res) => res.json())
        .then((response) => response)
        .catch(err => {
            console.error(err);
        });
    } catch (error) {
        console.log(error);
    }
}
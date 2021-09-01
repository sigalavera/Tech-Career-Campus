import fetcher from "../utils/fetcher";


export const fetchEvents = async () => {
    try {
        return await fetch('/api/event', {
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
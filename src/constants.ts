
const baseUrlApi = import.meta.env.VITE_API_URL;

export const endpointsUrls = {

    getEvents: `${baseUrlApi}/usuarios`,
    getEventById: `${baseUrlApi}/eventos`,
    login: `${baseUrlApi}/usuarios/login`,
    register: `${baseUrlApi}/usuarios`,
    getTickets: `${baseUrlApi}/tickets`,
    createEvent: `${baseUrlApi}/eventos`

}
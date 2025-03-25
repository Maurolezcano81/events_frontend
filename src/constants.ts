

const baseUrlApi = import.meta.env.VITE_API_URL;

export const endpointsUrls = {

    getEvents: `${baseUrlApi}/eventos`,
    getEventById: `${baseUrlApi}/eventos`,
    login: `${baseUrlApi}/usuarios/login`,
    register: `${baseUrlApi}/usuarios`,
    getTickets: `${baseUrlApi}/tickets`


}
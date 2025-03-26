
import { endpointsUrls } from "../../constants";
import { Event } from "./Events.types";


const token = "asd"

export const EventsService = {

    async getEvents(id: number): Promise<Event[]> {
        const response = await fetch(`${endpointsUrls.getEvents}/${id}/mis-eventos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
        return response.json();
    },

    async getEventById(id: number): Promise<Event> {
        const response = await fetch(`${endpointsUrls.getEventById}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })

        return response.json()
    },

    async createEvent(data: Event) {

        const response = await fetch(`${endpointsUrls.createEvent}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })


        if (!response.ok) {
            const errorMessage = await response.json() || "Error al crear el evento, intentelo reiniciando el sitio."

            throw errorMessage;
        }

        return await response.json();;
    }

}

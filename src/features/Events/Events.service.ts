
import { endpointsUrls } from "../../constants";
import { Event } from "./Events.types";


const token = "asd"

export const EventsService = {

    async getEvents(): Promise<Event[]> {
        const response = await fetch(endpointsUrls.getEvents, {
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
    }

}
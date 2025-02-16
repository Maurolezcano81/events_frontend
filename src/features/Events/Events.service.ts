
import { endpointsUrls } from "../../constants";
import { Event } from "./Events.types";

export const EventsService = {

    async getEvents(): Promise<Event[]> {
        const response = await fetch(endpointsUrls.getEvents, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'asd',
            }
        })

        return response.json();
    }

}
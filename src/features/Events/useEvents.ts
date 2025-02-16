import { useEffect, useState } from "react";
import { Event } from "./Events.types";
import { EventsService } from "./Events.service";

export function useEvents() {

    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        async function fetchEvents() {
            try {
                const data = await EventsService.getEvents();
                setEvents(data);

            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchEvents()
    }, [])


    return { events, loading, error };
}
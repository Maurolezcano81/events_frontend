import { useEffect, useState } from "react";
import { Event } from "./Events.types";
import { EventsService } from "./Events.service";

export function useEvents() {

    const [event, setEvent] = useState<Event>()
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

    async function fetchEvent(id: number) {
        setLoading(true);
        setError(null);
        try {
            const data = await EventsService.getEventById(id);
            setEvent(data)
        } catch (error) {
            setError((error as Error).message)
        } finally {
            setLoading(false)
        }
    }

    return { event, events, loading, error, fetchEvent };
}
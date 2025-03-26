import { useEffect, useState } from "react";
import { Event, EventsUser } from "./Events.types";
import { EventsService } from "./Events.service";
import { useMutation } from "@tanstack/react-query";
import { EventCreateType } from "./Events.schema";
import { useAuthStore } from "../../stores/AuthStore";

export function useEvents() {

    const [event, setEvent] = useState<Event>()
    const [events, setEvents] = useState<EventsUser>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const userId = useAuthStore((state) => state.user?.id)

    useEffect(() => {

        async function fetchEvents(id: number) {
            try {
                const data = await EventsService.getEvents(id);
                setEvents(data);

            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchEvents(userId!)
    }, [userId])

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
export const useCreateEvent = () => {
    return useMutation<Event, Error, EventCreateType & { tipo_invitacion: string; usuario_fk: number | undefined; estado_evento: string }>({
        mutationFn: EventsService.createEvent,
        onSuccess: (data) => {
            console.log("Evento creado:", data);
        },
        onError: (error) => {
            console.error("Error al crear el evento:", error);
        }
    });
};
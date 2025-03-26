import { Ticket } from "../../TypesGlobals/Ticket.type";
import { User } from "../../TypesGlobals/User.type";

export interface EventsUser {
    usuario: {
        usuario: {
            User: User
        };
        eventos: Event[];
    }
}
export interface Event {
    id: number,
    nombre: string,
    descripcion: string,
    lugar: string,
    fecha_y_hora: Date,
    estado_evento: string,
    texto_color: string;
    fondo_color: string;
    anfitrion: string;
    tipo_invitacion: string;
    privacidad_evento: string,
    usuario_fk: number,
    created_at: Date,
    updated_at: Date,
    ticket_fk: Ticket,
    invitados?: [],
    user?: User
}

export interface CardEventProps {
    event: Event;
}

export type createEventType = Omit<Event, 'id' | 'created_at' | 'updated_at' | 'invitados' | 'user'>
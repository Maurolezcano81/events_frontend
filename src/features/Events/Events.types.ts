import { Ticket } from "../../TypesGlobals/Ticket.type";
import { User } from "../../TypesGlobals/User.type";

export interface Event {
    id: number,
    nombre: string,
    descripcion: string,
    lugar: string,
    fecha_y_hora: Date,
    estado_evento: string,
    privacidad_evento: string,
    usuario_fk: User,
    ticket_fk: Ticket,
    created_at: Date,
    updated_at: Date,
    invitados?: [],
    user?: User
}

export interface CardEventProps {
    event: Event;
}
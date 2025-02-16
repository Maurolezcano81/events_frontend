
interface User {
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    nombre_usuario: string,
    created_at: Date,
    updated_at: Date
}

interface Ticket {
    id: number,
    fondo_color: string,
    letras_color: string,
    created_at: Date,
    updated_at: Date
}

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
    updated_at: Date
}

export interface CardEventProps {
    event: Event;
}
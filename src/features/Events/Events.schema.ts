
import { z } from 'zod';

const TicketSchema = z.object({
    name: z.string(),
    children: z.any(),
});

const EventCreateSchema = z.object({
    nombre: z
        .string({ invalid_type_error: "Tipo de dato no valido.", required_error: "Este campo no puede estar vacío" })
        .min(1, "El titulo no debe estar vacío"),
    descripcion: z
        .string({ invalid_type_error: "Tipo de dato no valido.", required_error: "Este campo no puede estar vacío" })
        .min(1, "El titulo no debe estar vacío"),
    lugar: z
        .string({ invalid_type_error: "Tipo de dato no valido.", required_error: "Este campo no puede estar vacío" })
        .min(1, "El titulo no debe estar vacío"),
    fecha_y_hora: z
        .date({ invalid_type_error: "Tipo de dato no valido.", required_error: "Este campo no puede estar vacío" }),
    privacidad_evento: z
        .string({ invalid_type_error: "Tipo de dato no valido.", required_error: "Este campo no puede estar vacío" })
        .min(1, "El titulo no debe estar vacío"),
    estado_evento: z
        .boolean({ invalid_type_error: "Tipo de dato no valido.", required_error: "Este campo no puede estar vacío" }),
    usuario_fk: z
        .number({ invalid_type_error: "Tipo de dato no valido.", required_error: "Este campo no puede estar vacío" })
        .min(1, "Primero debe iniciar sesión"),
    texto_color: z
        .string({ invalid_type_error: "Tipo de dato no valido.", required_error: "Este campo no puede estar vacío" })
        .min(1, "El titulo no debe estar vacío"),
    fondo_color: z
        .string({ invalid_type_error: "Tipo de dato no valido.", required_error: "Este campo no puede estar vacío" })
        .min(1, "El titulo no debe estar vacío"),
    ticket_fk: TicketSchema,
    host_fk: z
        .string({ invalid_type_error: "Tipo de dato no valido.", required_error: "Este campo no puede estar vacío" })
        .min(1, "El titulo no debe estar vacío"),
})


export default EventCreateSchema
export type EventCreateType = z.infer<typeof EventCreateSchema>
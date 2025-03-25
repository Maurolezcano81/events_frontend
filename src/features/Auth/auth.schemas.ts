import { z } from 'zod';


export const loginSchema = z.object({
    email: z.string().email("El correo no es valido."),
    contrasena: z
        .string({ message: "Debe introducir caracteres validos" })
        .min(1, "Este campo no puede estar vacío.") // Cambié refine por min
        .max(128, "La contraseña es demasiado larga.") // Para mayor control
})

export const registerSchema = z.object({
    nombre: z
        .string({ invalid_type_error: "El tipo de dato no es válido.", required_error: "Este campo no puede estar vacío." })
        .min(1, { message: "Este campo no puede estar vacío." }),
    apellido: z
        .string({ invalid_type_error: "El tipo de dato no es válido.", required_error: "Este campo no puede estar vacío." })
        .min(1, { message: "Este campo no puede estar vacío." }),
    email: z
        .string({ invalid_type_error: "El tipo de dato no es válido.", required_error: "Este campo no puede estar vacío." })
        .min(1, { message: "Este campo no puede estar vacío." })
        .email({ message: "Debe introducir un correo electroníco valído." }),
    nombre_usuario: z
        .string({ invalid_type_error: "El tipo de dato no es válido.", required_error: "Este campo no puede estar vacío." })
        .min(1, { message: "Este campo no puede estar vacío." }),
    contrasena: z
        .string({ invalid_type_error: "El tipo de dato no es válido.", required_error: "Este campo no puede estar vacío." })
        .min(8, { message: "La contraseña debe tener más de 8 caracteres" }),
    repetir_contrasena: z
        .string({ invalid_type_error: "El tipo de dato no es válido.", required_error: "Este campo no puede estar vacío." })
        .min(8, { message: "La contraseña debe tener más de 8 caracteres" }),
}).refine((data) => data.contrasena === data.repetir_contrasena,
    { message: "Las contraseñas no coinciden.", path: ['repetir_contraseña'] })

export type LoginForm = z.infer<typeof loginSchema>
export type registerSchemaType = z.infer<typeof registerSchema>
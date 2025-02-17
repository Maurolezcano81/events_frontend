import { z } from 'zod';


export const loginSchema = z.object({
    email: z.string().email("El correo no es valido."),
    password: z
        .string()
        .refine(val => val.trim().length > 0, {
            message: "Este campo no puede estar vacío."
        })
})

export type LoginForm = z.infer<typeof loginSchema>
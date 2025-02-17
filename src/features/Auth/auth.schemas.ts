import { z } from 'zod';


export const loginSchema = z.object({
    email: z.string().email("El correo no es valido."),
    password: z
    .string()
    .min(1, "Este campo no puede estar vacío.") // Cambié refine por min
    .max(128, "La contraseña es demasiado larga.") // Para mayor control
})

export type LoginForm = z.infer<typeof loginSchema>
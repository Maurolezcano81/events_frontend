
export interface User {
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    contrasena: string,
    nombre_usuario: string,
    created_at: string,
    updated_at: string,
}


export type Login = Pick<User, 'email' | 'contrasena'>
export type Register = Pick<User, "nombre" | "apellido" | "email" | "contrasena" | "nombre_usuario">
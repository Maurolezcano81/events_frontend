
export interface User {
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    nombre_usuario: string,
    created_at: Date,
    updated_at: Date
}


export type Login = Pick<User, 'email' | 'password'>
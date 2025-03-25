
export interface Error {
    message?: string,
    errors?: Record<string, string[]>,
    status?: number
}
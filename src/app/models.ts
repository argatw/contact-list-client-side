export interface Registration {
    id?: string // ? means optional
    name: string
    email: string
    tel: string
}

export interface Response {
    code: number
    message?: string
    data?: any
}
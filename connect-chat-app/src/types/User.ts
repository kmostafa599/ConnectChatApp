import { string } from "yup"

export type User = {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    password: string
}

export type UserSignIn = {
    email: string,
    password: string
}

export type Route = { 
    exact: true,
    path: string, 
    element: Element 
}

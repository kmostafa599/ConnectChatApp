import axios from "axios";
import { User } from "../types/User"

const URL = "http://localhost:7000/"

const api = axios.create({baseURL: URL}); 

export const signUpAPI = async (user: User) => {
    const response = await api.post("/auth/signup", user);
    return response.data;

}

export const signInAPI = async (email:string, password:string) => {
    const response = await api.post("/auth/login", { email, password });
   
    return response.data;
    
} 

export const meAPI = async (token: string): Promise<User> => {
    const response = await api.get("/auth/me", {
        headers: {
            Authorization: token
        },
    });
    return response.data.user;
}

export const sendMessage = (content:string, userId:string) => api.post('/message/create',{content,userId}) 
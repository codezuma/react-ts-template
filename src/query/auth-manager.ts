import { useMutation } from "@tanstack/react-query";
import { authAPI } from "../apis/auth-API";

export const useRegisterUser = () => {
    return useMutation(['user', 'register'], authAPI.registerPatient)
}
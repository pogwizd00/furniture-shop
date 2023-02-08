import ky from "ky";
import {API_URL} from "../../../config";
import {UserDto} from "../../types/UserDto";
import {CreateUserDto} from "../../types/createUserDto";

export const getUser = async (id: string) => {
    return ky.get(`${API_URL}/user/${id}`).json<UserDto>()
}


export const updateUser = async (id: string, user: CreateUserDto) => {
    return ky.patch(`${API_URL}/user/${id}`, {json:user}).json<CreateUserDto>();
}

export const getUserToUpdate = async (id: string) => {
    return ky.get(`${API_URL}/user/update-user-data/${id}`).json<CreateUserDto>()
}
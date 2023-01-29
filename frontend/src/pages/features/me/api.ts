import ky from "ky";
import {API_URL} from "../../../config";
import {UserDto} from "../../types/UserDto";

export const getUser = async (id: string) => {
    return ky.get(`${API_URL}/user/${id}`).json<UserDto>()
}
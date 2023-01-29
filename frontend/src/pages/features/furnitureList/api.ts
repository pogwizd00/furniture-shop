import ky from "ky";
import {API_URL} from "../../../config";
import {SimpleFurniture} from "../../types/simpleFurniture";
import {CreateUserDto} from "../../types/createUserDto";
import {AddFurnitureToUser} from "../../types/addFurnitureToUser";


export const getUser = async (id: number) => {
    return ky.get(`${API_URL}/user/${id}`).json<CreateUserDto>()
}

export const listFurniture = async () => {
    return ky.get(`${API_URL}/furnitures`).json<SimpleFurniture[]>();
}

export const addFurnitureToUser = async (furniture: AddFurnitureToUser) => {
    return ky.post(`${API_URL}/user-furniture/add_furniture`, {json: furniture}).json<AddFurnitureToUser>();
};

export const removeFurnitureFromBasket = async (id: number, id_furniture: number) => {
    return ky.delete(`${API_URL}/user-furniture/${id}/${id_furniture}`).json();
}
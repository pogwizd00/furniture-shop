import ky from "ky";
import {API_URL} from "../../../config";
import {FurnituresList} from "../../types/furnituresList";
import {CreateOrder} from "../../types/createOrder";

export const getAllFurnituresForUser = (id: number) => {
    return ky.get(`${API_URL}/furnitures/find/${id}`).json<FurnituresList[]>()
}

export const createOrder = (order: CreateOrder) => {
    return ky.post(`${API_URL}/orders`, {json: order}).json<CreateOrder>()
}
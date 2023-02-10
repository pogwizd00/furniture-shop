import ky from "ky";
import {API_URL} from "../../../config";
import {OrderDto} from "../../types/OrderDto";


export  const getOrders = async () =>{
    return  ky.get(`${API_URL}/orders`).json<OrderDto[]>()
}

export  const removeOrder = async (id: number) =>{
    return  ky.delete(`${API_URL}/orders/${id}`).json()
}
import ky from "ky";
import {API_URL} from "../../../config";
import {OrderDto} from "../../types/OrderDto";


export  const getOrders = async () =>{
    return  ky.get(`${API_URL}/orders`).json<OrderDto[]>()
}
import ky from "ky";
import {API_URL} from "../../../config";
import {SimpleProducer} from "../../types/simpleProducer";


export const getProducers = async () => {
    return ky.get(`${API_URL}/producer`).json<SimpleProducer[]>()
};
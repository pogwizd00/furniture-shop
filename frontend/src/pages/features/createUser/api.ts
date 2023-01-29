import React, {FC} from 'react';
import {CreateUserDto} from "../../types/createUserDto";
import ky from "ky";
import {API_URL} from "../../../config";

export const createUser = async (user: CreateUserDto) => {
    return ky.post(`${API_URL}/user`, {json: user}).json<CreateUserDto>();
};
import React, {FC} from 'react';
import {CreateUserDto} from "../../types/createUserDto";
import {useNavigate} from "react-router-dom";
import {useForm} from "@mantine/form";
import {Paper, Stack, Button, TextInput} from '@mantine/core';
import {createUser} from "./api";
import '../../Styles/CreateUser.css'

interface UserFormProps {
}

type FormType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}


export const UserForm: FC<UserFormProps> = () => {
    // const[user, setUser] = useState<>()
    const navigate = useNavigate();


    const form = useForm<FormType>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    })

    const handleSubmit = async (data: FormType) => {
        const user: CreateUserDto = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        }
        createUser(user).then(() => {
            navigate("/signIn")
        })
    }

    return (
        <div className={'class-user-container'}>
            <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
                <Paper shadow="xl" radius="lg" p="xl" withBorder>
                    <Stack spacing={"md"}>
                        <h2>Sign Up</h2>
                        <TextInput required type={"text"}
                                   placeholder={"First Name"} {...form.getInputProps('firstName')}/>
                        <TextInput required type={"text"}
                                   placeholder={"Last Name"} {...form.getInputProps('lastName')}/>
                        <TextInput required type={"email"} placeholder={"Email"} {...form.getInputProps('email')}/>
                        <TextInput required type={"password"}
                                   placeholder={"Password"}{...form.getInputProps('password')}/>
                        <Button type={"submit"} style={{backgroundColor: '#F2A65A', color: 'black'}} radius="md">
                            Create
                        </Button>
                    </Stack>
                </Paper>
            </form>
        </div>
    );
};
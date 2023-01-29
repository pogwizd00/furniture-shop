import React, {FC, useState} from 'react';
import {useForm} from "@mantine/form";
import {SignInFormTypes} from "./SignInFormTypes";
import {Stack, TextInput} from "@mantine/core";
import {Button} from '@mantine/core';
import {signIn} from "./api";
import {Link, useNavigate} from "react-router-dom";
import {signInCorrectNotifications, signInErrorNotification} from "./notification";
import logo from '../../images/drawer (2).png';


export const userId = 0;

export const SignInForm: FC = () => {

    const navigate = useNavigate();
    const form = useForm<SignInFormTypes>({
        initialValues: {
            email: '',
            password: '',
        },
    })


    const handleSubmit = async (data: SignInFormTypes) => {
        try {
            await signIn(data.email, data.password);
            signInCorrectNotifications();
            navigate('/products');
        } catch (error) {
            signInErrorNotification();
        }
    }

    return (
        <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
            <Stack spacing={"md"}>
                <h2>Sign In</h2>
                <TextInput required type={"email"} placeholder="Email" {...form.getInputProps('email')} />
                <TextInput required type={"password"} mt="md"
                           placeholder="Password" {...form.getInputProps('password')} />
                <Button type={"submit"} color="yellow" radius="md">Submit</Button>
                <span>Create account<Link to={'/signUp'}> here :D</Link></span>
            </Stack>
        </form>
    );
};
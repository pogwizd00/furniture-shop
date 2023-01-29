import React, {FC} from 'react';
import {SignInForm} from "../features/login/SignInForm";
import '../Styles/SignIn.css'
import {Paper} from '@mantine/core';

interface SignInProps {
}

export const SignIn: FC<SignInProps> = ({}) => {
    return (
        <div className={'class-container'}>
            <Paper shadow="xl" radius="lg" p="md">
                <SignInForm/>
            </Paper>
        </div>
    );
};
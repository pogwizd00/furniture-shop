import React, {FC} from 'react';
import {UserForm} from "../features/createUser/UserForm";

interface SignUpProps {
}

export const SignUp: FC<SignUpProps> = ({}) => {
    return (
        <div>
            <UserForm/>
        </div>
    );
};
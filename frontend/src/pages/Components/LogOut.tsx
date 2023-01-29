import React, {FC} from 'react';
import {LogOutForm} from "../features/logout/LogOutForm";

interface LogOutProps {
}

export const LogOut: FC<LogOutProps> = ({}) => {
    return (
        <div>
            <LogOutForm/>
        </div>
    );
};
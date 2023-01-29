import React, {FC} from 'react';
import '../Styles/About.css';
import {MeForm} from "../features/me/MeForm";

interface AboutProps {
}

export const About: FC<AboutProps> = ({}) => {
    return (
        <div>
            <MeForm/>
        </div>
    );
};
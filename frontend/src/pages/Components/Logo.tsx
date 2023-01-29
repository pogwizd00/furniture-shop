import React, {FC} from 'react';
import mainLogo from '../images/drawer (2).png';

interface LogoProps {
}

export const Logo: FC<LogoProps> = ({}) => {
    return (
        <div>
            <img src={mainLogo}/>
        </div>
    );
};
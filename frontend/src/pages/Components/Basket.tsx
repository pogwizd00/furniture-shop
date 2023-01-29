import React, {FC} from 'react';
import {BasketForm} from "../features/basket/BasketForm";


interface BasketProps {
}

export const Basket: FC<BasketProps> = () => {
    return (
        <div>
            <BasketForm/>
        </div>
    );
};
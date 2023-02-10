import React, {FC} from 'react';
import {OrdersForm} from "../features/orders/OrdersForm";

interface OrdersProps {}

export const Orders: FC<OrdersProps> = ({}) =>{
    return (
        <div>
            <OrdersForm/>
        </div>
    );
};
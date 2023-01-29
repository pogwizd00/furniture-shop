import React, {FC} from 'react';
import '../Styles/Products.css';
import {FurnitureList} from '../features/furnitureList/FurnitureList'

interface SalesProps {
}

export const Products: FC<SalesProps> = ({}) => {
    //todo Products: chairs, desks, shelf's, wardrobes
    //todo Create flex area for all products where every products will have:
    //todo id: number, name: string ,img, cost: double
    return (
        <div>
            <FurnitureList/>
        </div>
    );
};
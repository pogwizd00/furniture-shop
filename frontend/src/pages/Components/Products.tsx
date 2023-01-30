import React, {FC} from 'react';
import '../Styles/Products.css';
import {FurnitureList} from '../features/furnitureList/FurnitureList'

interface SalesProps {
}

export const Products: FC<SalesProps> = ({}) => {
    return (
        <div>
            <FurnitureList/>
        </div>
    );
};
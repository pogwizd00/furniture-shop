import React, {FC} from 'react';
import {ProducersForm} from "../features/producers-list/ProducersForm";

interface ProducersProps {
}

export const Producers: FC<ProducersProps> = () => {
    return (
        <div>
            <ProducersForm/>
        </div>
    );
};
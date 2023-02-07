import React, {FC, useEffect} from 'react';
import {SimpleProducer} from "../../types/simpleProducer";
import {getProducers} from "./api";
import {Image, Paper, Text} from '@mantine/core';
import "../../Styles/ProducerList.css"


export const ProducersForm: FC = () => {
    const [allProducer, setProducer] = React.useState<SimpleProducer[]>([]);

    useEffect(() => {
        getProducers().then((data) => setProducer(data));
    }, []);


    return (
        <div className={'producers-list'}>
            {allProducer.map((producer) => (
                <Paper key={producer.id} className={'producer-children'} shadow="xl" radius="lg" p="md" withBorder>

                    <div style={{backgroundColor: 'grey'}} className={'image-place'}>
                        <Image
                            height={165}
                            src={'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'}
                            alt="With default placeholder"
                            withPlaceholder
                        />
                    </div>
                    <div style={{backgroundColor: '#E8E8E8', textAlign: 'left', paddingLeft: '5%', paddingTop: '1%'}}
                         className={'about-place'}>

                        <h3>Name:</h3> <Text> {producer.name}</Text>
                        <h3>About:</h3> <Text>{producer.about}</Text>
                    </div>
                </Paper>
            ))}
        </div>
    );
};
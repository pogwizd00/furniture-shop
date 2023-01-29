import React, {FC} from 'react';
import {Text, Paper} from '@mantine/core';
import {Link} from "react-router-dom";

interface AboutWhenIsNotLoggedProps {
}

export const AboutWhenIsNotLogged: FC<AboutWhenIsNotLoggedProps> = ({}) => {
    return (
        <div>
            <Paper withBorder style={{marginTop: '2vh'}} shadow="sm" radius="md" p="xl">
                <Text weight={500}>You have to be logged</Text>
                <Text weight={500}>Click <Link to={'signin'}>here</Link> to logging in you account</Text>
            </Paper>
        </div>
    );
};
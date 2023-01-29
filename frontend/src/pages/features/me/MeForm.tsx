import React, {FC, useEffect} from 'react';
import {UserDto} from "../../types/UserDto";
import {getUser} from "./api";
import {Stack, Paper, Accordion} from '@mantine/core';

interface MeFormProps {
}

export const getCookieName = (cname: string) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


export const MeForm: FC<MeFormProps> = () => {
    const id = getCookieName('user-id');

    const [user, setUser] = React.useState<UserDto>();

    useEffect(() => {
        getUser(id).then((data) => setUser(data));
    }, []);


    return (
        <div>
            <Stack style={{marginTop: '2vh'}} align="center" sx={(theme) => ({
                height: 300
            })}>
                <Paper shadow="lg" radius="md" p="xl" withBorder>
                    <Accordion defaultValue="customization">
                        <Accordion.Item value="customization">
                            <Accordion.Control>First Name</Accordion.Control>
                            <Accordion.Panel>{user?.firstName}</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="flexibility">
                            <Accordion.Control>Last Name</Accordion.Control>
                            <Accordion.Panel>{user?.lastName}</Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="focus-ring">
                            <Accordion.Control>Email</Accordion.Control>
                            <Accordion.Panel>{user?.email}</Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>

                </Paper>
            </Stack>
        </div>
    );
};
import React, {FC, useEffect} from 'react';
import {SimpleFurniture} from "../../types/simpleFurniture";
import {addFurnitureToUser, listFurniture} from "./api";
import {Paper} from '@mantine/core';
import '../../Styles/FurnitureList.css';
import {Card, Image, Text, Badge, Button, Group} from '@mantine/core';
import {getCookieName} from "../me/MeForm";
import {
    notificationAterAddFurnitureToUser,
    notificationUserIsNotLoggedOrProductIsAlreadyInBasket
} from "./notufication";


type FurnitureUser = {
    userId: number,
    furnituresId: number
}

export const FurnitureList: FC = () => {
    const [furnitures, setFurnitures] = React.useState<SimpleFurniture[]>([]);

    useEffect(() => {
        listFurniture().then((data) => setFurnitures(data))
    }, []);


    const addToBasket = async (furnituresId: number) => {
        const userId = getCookieName('user-id');
        try {
            const userFurniture: FurnitureUser = {
                userId: parseInt(userId),
                furnituresId: furnituresId,
            }
            await addFurnitureToUser(userFurniture);
            notificationAterAddFurnitureToUser();

        } catch (e) {
            notificationUserIsNotLoggedOrProductIsAlreadyInBasket();
        }
    }


    return (
        <div className={'furniture-list-container'}>
            {furnitures.map((furniture) => (
                <Paper key={furniture.id} className={'furniture-list-children'} shadow="xl" radius="lg" p="lg"
                       withBorder
                       style={{marginTop: '5px'}}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image
                                height={120}
                                src={'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'}
                                alt="With default placeholder"
                                withPlaceholder
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>{furniture.type}</Text>

                            <Badge color="pink" variant="light">
                                {furniture.price}$
                            </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                            {furniture.specific}
                        </Text>
                        <Button onClick={() => addToBasket(furniture.id)} variant="light"
                                style={{backgroundColor: '#F2A65A', color: 'black'}} fullWidth mt="md"
                                radius="md">
                            Add To Basket
                        </Button>
                    </Card>

                </Paper>
            ))
            }
        </div>
    );
};
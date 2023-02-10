import React, {FC, useEffect} from 'react';
import {getCookieName} from "../me/MeForm";
import {createOrder, getAllFurnituresForUser} from "./api";
import {Button, Group, CloseButton, TextInput, Badge, Paper, Image} from '@mantine/core';
import '../../Styles/UserFurnitureList.css'
import {SimpleFurniture} from "../../types/simpleFurniture";
import {removeFurnitureFromBasket} from "../furnitureList/api";
import {OrderFormType} from "./OrderFormType";
import {useForm} from "@mantine/form";
import {useNavigate} from "react-router-dom";
import {orderBadNotification, orderSuccessfulNotification} from "./notification";
import {notificationRemoveFurnitureFromBasket} from "../furnitureList/notufication";
import {UserDto} from "../../types/UserDto";
import {getUser} from "../me/api";
import {CreateOrder} from "../../types/createOrder";


interface BasketFormProps {
}

export const BasketForm: FC<BasketFormProps> = () => {


    const navigate = useNavigate();
    const userId = getCookieName('user-id');

    const [furnituresList, setFurnitures] = React.useState<SimpleFurniture[]>([]);
    const [user, setUser] = React.useState<UserDto>();

    useEffect(() => {
        getAllFurnituresForUser(parseInt(userId)).then((data) => setFurnitures(data));
    }, []);

    useEffect(() => {
        getUser(userId).then((data) => setUser(data));
    }, []);


    let price: number = 0.0;
    furnituresList.map(furniture => (
        price += furniture.price
    ))

    const form = useForm<OrderFormType>(
        {
            initialValues: {
                email: '',
                country: '',
                residence: '',
                postalCode: '',
                phoneNumber: '',
                price: 0,
                detailsToOrder: ''
            }
        }
    )

    const handleOnSubmit = async (data: OrderFormType) => {
        try {
            const order: CreateOrder = {
                email: user?.email!, //ts can trust me :))
                country: data.country,
                residence: data.residence,
                postalCode: data.postalCode,
                phoneNumber: data.phoneNumber,
                price: price,
                detailsToOrder: data.detailsToOrder
            }
            createOrder(order).then(() => {
                navigate('/products')
            })
            orderSuccessfulNotification();
        } catch (error) {
            orderBadNotification();
        }
    }

    const handleOnClickRemoveFurniture =  (id_furniture: number) => {
        try {
            removeFurnitureFromBasket(parseInt(userId), id_furniture).then(()=>{
                const furnituresAfterRemove = furnituresList.filter(
                    (furniture)=> id_furniture !== furniture.id);
                setFurnitures(furnituresAfterRemove);
            })
            notificationRemoveFurnitureFromBasket();
        } catch (error) {
            orderBadNotification();
        }
    }

    return (
        <div>
            <div className={'furniture-list'}>
                {furnituresList.map(furniture => (
                    <Paper key={furniture.id} className={'furniture-children'} shadow="xl" radius="lg" p="md"
                           withBorder>
                        <div style={{backgroundColor: 'grey'}} className={'image-place-furniture'}>
                            <Image
                                height={165}
                                src={'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'}
                                alt="With default placeholder"
                                withPlaceholder
                            />
                        </div>
                        <div
                            style={{textAlign: 'left', paddingLeft: '5%', paddingTop: '1%'}}
                            className={'about-place-furniture'}>
                            <Badge size='lg' color="orange"><span
                                style={{fontWeight: 'bold'}}>Type:</span></Badge> {furniture.type}<br/>
                            <br/>
                            <Badge size='lg' color="orange"><span
                                style={{fontWeight: 'bold'}}>Specific:</span></Badge> {furniture.specific}<br/>
                            <br/>
                            <Badge size='lg' color="orange"><span
                                style={{fontWeight: 'bold'}}>Price:</span></Badge> {furniture.price}$<br/>
                        </div>
                        <div>
                            <Group position="center">
                                <CloseButton onClick={() => handleOnClickRemoveFurniture(furniture.id)}
                                             title="Delete Product" size="xl" iconSize={20}/>
                            </Group>
                        </div>
                    </Paper>
                ))}
            </div>
            <form onSubmit={form.onSubmit(values => handleOnSubmit(values))}>
                <Paper className={'order-paper'} shadow="xl" radius="xl" p="lg" withBorder>
                    <div className={'order-all'}>
                        <div className={'order-info'}>
                            <TextInput
                                required type={'country'}
                                label="Country"
                                withAsterisk
                                {...form.getInputProps('country')}
                            />
                            <TextInput
                                label="Residence"
                                required type={'residence'}
                                withAsterisk
                                {...form.getInputProps('residence')}
                            />
                            <TextInput
                                label="Postal Code"
                                required type={'postalCode'}
                                withAsterisk
                                {...form.getInputProps('postalCode')}
                            />
                            <TextInput
                                label="Phone Number"
                                required type={'phoneNumber'}
                                withAsterisk
                                {...form.getInputProps('phoneNumber')}
                            />
                            <TextInput
                                label="Details to Order"
                                {...form.getInputProps('detailsToOrder')}
                            />
                        </div>
                        <div className={'order-result'}>
                            <div style={{marginLeft: '6vw', fontWeight: 'bold', fontSize: '1.5rem'}}>Total price:</div>
                            <div style={{
                                marginLeft: '6vw',
                                fontSize: '3vw',
                                border: 'solid grey 1px',
                                borderRadius: '0.7rem',
                                padding: '0.3rem 0.7rem',
                                boxShadow: '4px 4px 10px #888888'
                            }}>{price}$
                            </div>
                            <div>
                                <Button type={'submit'} className={'button-basket'}
                                        style={{marginTop: '4vh', marginLeft: '6vw'}}
                                        color="orange" radius="lg" size="xl">
                                    Buy
                                </Button>
                            </div>
                        </div>
                    </div>
                </Paper>
            </form>
            <div/>
        </div>
    );
};
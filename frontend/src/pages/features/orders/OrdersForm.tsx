import React, {FC, useEffect} from 'react';
import {Title, Paper, Table, Modal, useMantineTheme, Button, Textarea} from '@mantine/core';
import {getOrders, removeOrder} from "./api";
import {OrderDto} from "../../types/OrderDto";
import { IconTrash } from '@tabler/icons-react';
import { IconEye } from '@tabler/icons-react';
import '../../Styles/TableStyle.css'
import {notificationAfterSuccessfullyDeleted} from "./notifications";

interface OrdersFormProps {}

export const OrdersForm: FC<OrdersFormProps> = ({}) =>{

    const [orders, setOrders] = React.useState<OrderDto[]>([]);
    const [open, setOpen] = React.useState(false);
    const [order,setOrder] = React.useState<OrderDto>();

    useEffect(() => {
        getOrders().then((data) =>{
            setOrders(data);
        })
    }, []);


    const removeRow = (id: number) =>{
        removeOrder(id).then(()=>{
            const dataAfterRemoveRow = orders.filter((row)=> id !== row.id);
            setOrders(dataAfterRemoveRow);
            notificationAfterSuccessfullyDeleted();
        })
    }


    const headers = (
        <tr>
            <th>Email</th>
            <th>Residence</th>
            <th>Date of Order</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>Postal Code</th>
            <th>Details to Order</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
    );

    const theme = useMantineTheme();

    const rows = orders && orders.map((data)=>(
        <tr onClick={()=>setOrder(data)} key={data.id} style={{cursor:'pointer'}}>
            <td>{data.email}</td>
            <td>{data.residence}</td>
            <td>{data.dateOfOrder.toString()}</td>
            <td>{data.phoneNumber}</td>
            <td>{data.country}</td>
            <td>{data.postalCode}</td>
            <td>{data.detailsToOrder}</td>
            <td>{data.price}$</td>
            <td className={'icons-container'} width={50}>
                <IconTrash
                    onClick={()=>{
                        removeRow(data.id);
                    }
                }
                    style={{ color:'black'}}
                />
                <Modal
                    opened={open}
                    onClose={()=>setOpen(false)}
                    title={'Info about order :D'}
                    overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                    overlayOpacity={0.01}
                    overlayBlur={3}
                >
                    <div className={'info-container'}>
                        <div className={'info-order'}>
                        <div><span style={{fontWeight:'bold'}}>Email:</span> {order?.email}</div>
                        <div><span style={{fontWeight:'bold'}}>Country:</span> {order?.country}</div>
                        <div><span style={{fontWeight:'bold'}}>Residence:</span> {order?.residence}</div>
                        <div><span style={{fontWeight:'bold'}}>PostalCode:</span> {order?.postalCode}</div>
                        <div><span style={{fontWeight:'bold'}}>Phone number:</span> {order?.phoneNumber}</div>
                        <div><span style={{fontWeight:'bold'}}>Price: </span> {order?.price}$</div>
                        </div>
                        <div className={'info-button'}>
                            <Textarea
                                placeholder="Your comment to customer"
                            />
                            <Button color="yellow" uppercase>Sent</Button>
                        </div>
                    </div>
                </Modal>
                <IconEye onClick={()=>setOpen(true)}/>
            </td>
        </tr>
    ))


    return (
        <div>
            <Paper style={{backgroundColor:'#FFF4E6'}} shadow="xs" p="md">
                <Title order={1}>Orders:</Title>
            </Paper>
            <Paper style={{margin:'2vh 2vw'}} shadow="xs" p="md">
                <Table striped highlightOnHover withBorder withColumnBorders>
                    <thead>{headers}</thead>
                    <tbody >{rows}</tbody>
                </Table>
            </Paper>
        </div>
    );
};
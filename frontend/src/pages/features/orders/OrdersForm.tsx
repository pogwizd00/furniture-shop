import React, {FC, useEffect} from 'react';
import {Title, Paper, Table, Modal} from '@mantine/core';
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


    useEffect(() => {
        getOrders().then((data) =>{
            setOrders(data);
        })
    }, []);

    const removeRow = (id: number) =>{
        removeOrder(id).then(()=>{
            const dataAfterRemoveRow = orders.filter((row)=> id !== row.id);
            setOrders(dataAfterRemoveRow);
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

    const rows = orders && orders.map((data)=>(
        <tr key={data.id}>
            <td>{data.email}</td>
            <td>{data.residence}</td>
            <td>{data.dateOfOrder.toString()}</td>
            <td>{data.phoneNumber}</td>
            <td>{data.country}</td>
            <td>{data.postalCode}</td>
            <td>{data.detailsToOrder}</td>
            <td>{data.price}</td>
            <td className={'icons-container'} width={50}>
                <IconTrash onClick={()=>removeRow(data.id)} style={{cursor:'pointer', color:'red'}}/>
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
                    <tbody>{rows}</tbody>
                </Table>
            </Paper>
        </div>
    );
};
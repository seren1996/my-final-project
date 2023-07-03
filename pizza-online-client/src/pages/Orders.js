import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../styles/Orders.css';
import axios from '../api/axios';
const ORDER_URL = '/api/Order/GetOrder';


function Orders() {
    const [orders, setOrders] = useState([]);
    const [keys, setKeys] = useState([]);
    const [colNumber, setColNumber] = useState(0);

    useEffect(() => {
        axios
            .get(ORDER_URL)
            .then((res) => {
                setOrders(res.data)
                setKeys(Object.keys(res.data[1]))
                setColNumber(keys.length)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [keys])


    return <>
        <div className='ordersDiv'>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        {Array.from({ length: colNumber }).map((_, index) => (
                            <th key={index}>{keys[index]}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((order, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>

                                {Array.from({ length: colNumber }).map((_, index) => {
                                    const k = keys[index];
                                    const values = Object.values(order);
                                    if (k == "orderDate") {
                                        let date = new Date(order.orderDate);
                                        return <td key={index}>{date.toLocaleDateString()}</td>
                                    } else {
                                        return <td key={index}>{values[index]}</td>
                                    }
                                })}

                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    </>
}

export default Orders;


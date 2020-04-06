import React from 'react';
import axios from 'axios';

import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import OrderList from '../components/ConfirmationOrder/OrderList';
import OrderInfo from '../components/OrderInfo';

export default class OrderProcess extends React.Component {
    constructor(){
        super();
        this.state = {
            orders: [],
            selectedPostId: null,
            error: false
        }    
    }

    
    componentDidMount() {
        axios.get('https://dsmproyecto-b9b6b.firebaseio.com/Orders.json')
            .then(response => {
                let orders = [];
                for (let key in response.data) {
                    orders.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                this.setState({ orders: orders });
            }).catch(error => {
                this.setState({ error: true });
            });
    }


    deleteOrderHandler = (id) => {
        console.log('Del');
        axios.delete(`https://dsmproyecto-b9b6b.firebaseio.com/Orders/${id}.json`).then(() => {
            window.location.reload()
        })
    }


    render(){
        // Lista de productos
        console.log(this.state.orders);
        let orderList =  this.state.orders.map((list, i) => {
            return <> 
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <Row>
                    <Col xs> 
                        <OrderList
                            orderList={list.cartItems}
                            totalPrice={list.totalPrice}
                        ></OrderList>
                    </Col>
                    <Col xs className="d-flex justify-content-rigth align-items-center ml-5">
                        <OrderInfo
                            name={list.OrderInfo.name}
                            surname={list.OrderInfo.surname}
                            email={list.OrderInfo.email}
                            address={list.OrderInfo.address}
                            city={list.OrderInfo.city}
                            postcode={list.OrderInfo.postcode}
                        ></OrderInfo>
                        <Button variant='danger' className='m-3' onClick={() => this.deleteOrderHandler(list.idb)}k>Delete</Button>
                    </Col>
                </Row>
            </li>
            </>
        });
        return(
            <>
            <Container className="p-3">
            <h1> Order history</h1>
            <Row>
                <Col></Col>
                    <ul className='list-group'>
                                {orderList}
                    </ul>
                <Col></Col>
            </Row>
            </Container>
            </>
        );

    }
}
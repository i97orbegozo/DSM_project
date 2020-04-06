import React from 'react';

import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as Icon from 'react-bootstrap-icons';

import CartList from '../components/Cart/CartList';
import store from '../Store';

import * as ROUTES from '../constants/Routes';
import {Link} from 'react-router-dom';


export default class Cart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            show: false,
            cart: [],
            totalPrice: 0
        }
        store.subscribe(()=> {
            this.setState({
                cart: store.getState().cart,
                totalPrice: store.getState().totalPrice
            });
        });
    }

    calculateTotal(cart){
        let counter = 0;
        for(let i in cart){
            counter = counter + parseFloat(cart[i].numItems) * parseFloat(cart[i].price);
        }   
        return parseFloat(counter).toFixed(2);
    }

    deleteCartItem = (event,idb) => {
        const cartObjIndx = this.state.cart.findIndex( p =>{
            return p.idb === idb;
        });
        const cart = this.state.cart
        cart.splice(cartObjIndx,1);
        this.setState({
            cart: cart,
            totalPrice: this.calculateTotal(cart)
        });

        // con redux
        store.dispatch({
            type: "DEL_FROM_CART",
            cart: cart,
            totalPrice: this.calculateTotal(cart)
        })
    }

    checkOutHandleButton=()=>{
        this.setState({
            show: false
        });

        if (this.state.cart.length == 0){
            alert('No items in the cart');
        }else{
            store.dispatch({
                type: "CHECKOUT",
                cart: this.state.cart,
                totalPrice: this.calculateTotal(this.state.cart)
            });
        }
    }

    render(){
        let cartProducts = <h5 style={{ textAlign: 'center' }}> No items added to the cart</h5>
        let button = "CheckOut";
        if(this.state.cart.length !== 0 ){
            cartProducts = <CartList
                    productList={this.state.cart}
                    totalPrice={this.state.totalPrice}
                    deleteCartItem={this.deleteCartItem}>
                </CartList>;

            button = <Link 
                    to={ROUTES.ORDERPROCESS}
                    style={{color: 'white'}}
                >CheckOut
                </Link>
        }

        return(
            <>
            <Button variant="outline-light " className="mr-3" onClick={() => this.setState({show: true})}>
                <Icon.Bucket size="1.5rem"/>    
            </Button>

            {/*  -----------  Modal ----------*/}

            <Modal show={this.state.show} onHide={() => this.setState({show: false})}>
                <Modal.Header closeButton>
                <Modal.Title>
                    <Icon.Bucket size="1.75rem" className="mr-3"/> 
                    Cart
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cartProducts}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.setState({show: false})}>
                        Close
                    </Button>
                    <Button 
                        variant="warning" 
                        className="ml-3rem"
                        onClick={this.checkOutHandleButton}
                        >{button}
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}
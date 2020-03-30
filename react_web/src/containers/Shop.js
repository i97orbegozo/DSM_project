import React from 'react';
import axios from 'axios';
import {Row} from 'react-bootstrap';


import Products from '../components/Products/Products';
import Navigator from "../components/Navigator";
import Cart from "../containers/Cart";
import CartList from '../components/Cart/CartList';


export default class Shop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: [],
            totalPrice: 0,
            error: false
        }
    }

    componentDidMount() {
        axios.get('https://dsmproyecto-b9b6b.firebaseio.com/Products/t-shirt%20men.json')
            .then(response => {
                let posts = [];
                for (let key in response.data) {
                    posts.push({
                        ...response.data[key],
                        idb: key,
                        numItems: 1
                    });
                }
                this.setState({ products: posts });
            }).catch(error => {
                this.setState({ error: true });
            });
    }

    changeNum = (event,idb,action) =>{
        const objectIndex = this.state.products.findIndex( p => {
            return p.idb === idb;
        } );
          

        const object = {
            ...this.state.products[objectIndex]
        };
        switch(action){
            case 0:
                object.numItems = object.numItems - 1;
                break;
            case 1:
                object.numItems = object.numItems + 1;
                break;
            case 2:
                object.numItems = parseInt(event.target.value);
                break;
            default:
                // -- Nothing --
        }

        if(object.numItems < 1 || isNaN(object.numItems)){
            object.numItems = 1;
        }

        const allObjects = [...this.state.products];
        allObjects[objectIndex] = object;
        this.setState({products: allObjects});
    }

    // Added to cart ----------------------------------

    clickAddCart = (event,idb) => {
        // Search index of the object cliked
        const objectIndex = this.state.products.findIndex( p => {
            return p.idb === idb;
        } );

        // See if object already added to the cart 
        const cartObjIndx = this.state.cart.findIndex( p =>{
            return p.idb === idb;
        });

        const object = {
            ...this.state.products[objectIndex]
        };
        
        const allObjects = [...this.state.cart];
        if(cartObjIndx >= 0){
            object.numItems = this.state.cart[cartObjIndx].numItems + this.state.products[objectIndex].numItems;
            allObjects[cartObjIndx] = object;
        }else{
            allObjects.push(object);
        }           
        alert('Saved items in the cart')
        this.setState({
            cart: allObjects,
            totalPrice: this.calculateTotal(allObjects)
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
    }

    // Render -------------------------------------------------

    render() {
        
        let productBox = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        if (!this.state.error && this.state.products){ 
               productBox =
                        <Products
                            products={this.state.products}
                            subsItem={this.changeNum}
                            sumItem={this.changeNum}
                            onChangeNum={this.changeNum}
                            clicked={this.clickAddCart}
                        />
                ;
        }
        let cartProducts = <h5 style={{ textAlign: 'center' }}> No items added to the cart</h5>
        if(this.state.cart.length !== 0 ){
            cartProducts = <CartList
                    productList={this.state.cart}
                    totalPrice={this.state.totalPrice}
                    deleteCartItem={this.deleteCartItem}>
                </CartList>;
        }
        return( 
            <>
            <Navigator>
                <Cart>
                    {cartProducts}
                </Cart>
            </Navigator>
            
            <div className="container-sm text-center">
                <Row className="p-1 column-break-inside">
                    {productBox}
                </Row>
            </div>

            </>
        );
    }
}


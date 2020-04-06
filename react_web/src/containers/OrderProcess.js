import React from 'react';
import axios from 'axios';

import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import OrderList from '../components/ConfirmationOrder/OrderList';
import Form from '../components/Form';

import store from '../Store';

export default class OrderProcess extends React.Component{

    constructor(props){
        super(props);
        
        let cartAux = store.getState().cart;
        let priceAux = store.getState().totalPrice;

        this.state = {
            cart: cartAux,
            totalPrice: priceAux,
            form: {name: '', surname: '',email: '',address:'',city:'',postcode:''}
        };
    }

    formChangeHandler= (event,value) =>{
        let form = this.state.form;
        switch(value){
            case 'name':
                form.name = event.target.value;
                break;
            case 'surname':
                form.surname = event.target.value;
                break;
            case 'email':
                form.email = event.target.value;
                break;
            case 'address':
                form.address = event.target.value;
                break;
            case 'city':
                form.city = event.target.value;
                break;
            case 'postcode':
                form.postcode = event.target.value;
                break;
        }
        this.setState({form: form});
    }

    cancelForm = () => {
        let form = {name: '', surname: '',email: '',address:'',city:'',postcode:''}
        this.setState({
            form: form
        });
    }

    isFormCompleted(){
        let form = this.state.form;
        if(form.name === '' || form.surname === '' || form.email === '' || form.address === '' || form.city === '' || form.postCode === ''){
            return false;
        }else{
            return true;
        }
    }

    postDataHandler = () => {
        let postData = {cartItems: this.state.cart , OrderInfo: this.state.form, totalPrice: this.state.totalPrice};
        if (this.state.cart.length <= 0 ){
            alert('Problem in the order process');
            window.location.assign('/');
        }else{
            if(this.isFormCompleted()){
                axios.post('https://dsmproyecto-b9b6b.firebaseio.com/Orders.json', postData)
                .then(response => {
                    alert('Saved order');
                    window.location.assign('/');
                });
            }else{
                alert('Form not complete');
            }
        }
    }    

    render(){
        return(
            <>
                <div className="container-sm">                    
                    <h2 className="p-2 m-3">Order Process</h2>
                    <Container className="p-3">
                        <Row>
                            <Col xs></Col>
                            <Col xs border="secondary">
                                <OrderList
                                    orderList={this.state.cart}
                                    totalPrice={this.state.totalPrice}
                                ></OrderList>
                            </Col>
                            <Col xs></Col>
                        </Row>

                        <Row>
                            <Form
                                changeHandler={this.formChangeHandler}
                                cancelForm={this.cancelForm}
                                postDataHandler={this.postDataHandler}
                            ></Form>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}
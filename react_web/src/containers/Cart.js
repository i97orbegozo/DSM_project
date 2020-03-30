import React from 'react';
import {Link} from 'react-router-dom';

import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as Icon from 'react-bootstrap-icons';
import Form from '../components/Form';

export default class Cart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }

    render(){
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
                    {this.props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.setState({show: false})}>
                        Close
                    </Button>
                    <Button 
                        variant="warning" 
                        className="ml-3rem"

                        >Checkout</Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}
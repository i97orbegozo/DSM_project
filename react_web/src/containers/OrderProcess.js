import React from 'react';
import {Link} from 'react-router-dom';

import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as Icon from 'react-bootstrap-icons';


export default class Cart extends React.Component{


    render(){
        return(
            <>

            <Modal show={this.props.show} onHide={() => this.props.onHide()}>
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
                    <Button variant="secondary" onClick={() => this.props.onHide()}>
                        Close
                    </Button>

                    <Button variant="warning" className="ml-3rem">
                        Submit order
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

import React from 'react';

import {Form,Container,ButtonGroup,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Comments extends React.Component{
    render(){
        return(
            <Container>
                <Form className="m-3 p-2">
                <Form.Label><h2>Order form </h2></Form.Label>
                    <Form.Row className="container-sm">                            
                        <Form.Group as={Col}>
                            <Form.Control onChange={(event) => this.props.changeHandler(event)} value={this.props.name} type="text" placeholder="Name"/>                            
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control onChange={(event) => this.props.changeHandler(event)} value={this.props.surname} type="text" placeholder="Surname"/>
                        </Form.Group>
                    </Form.Row>
                        <Form.Row>
                                <Form.Control classname="p-2" onChange={(event) => this.props.changeHandler(event)} value={this.props.email} type="email" placeholder="Email"/>               
                                <Form.Control classname="p-2" onChange={(event) => this.props.changeHandler(event)} value={this.props.direction} type="text" placeholder="Direction"/>
                                <Form.Control classname="p-2" onChange={(event) => this.props.changeHandler(event)} value={this.props.postalcode} placeholder="Postal code"/>
                        </Form.Row>

                    <ButtonGroup>
                        <Button onClick={this.props.cancelForm} className="m-2 p-2" type="button" variant="outline-secondary">Cancel</Button>
                        <Button onClick={this.props.postDataHandler} className="m-2 p-2 text-dark" type="button" variant="warning">Submit form</Button>
                    </ButtonGroup>
                </Form>
            </Container>
        );
    }
}

import React from 'react';

import {Form,Container,ButtonGroup,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Comments extends React.Component{
    render(){
        return(
            <Container>
                <Form className="m-3 p-2">
                <Form.Label><h2>Order form </h2></Form.Label>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(event) => this.props.changeHandler(event,'name')} value={this.props.name} type="text" placeholder="Name"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control onChange={(event) => this.props.changeHandler(event,'surname')} value={this.props.surname} type="text" placeholder="Surname"/>
                </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control classname="p-2" onChange={(event) => this.props.changeHandler(event,'email')} value={this.props.email} type="email" placeholder="Email"/>
                </Form.Group>

                <Form.Group controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control classname="p-2" onChange={(event) => this.props.changeHandler(event,'address')} value={this.props.address} type="text" placeholder="Address"/>
                </Form.Group>

                <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control classname="p-2" onChange={(event) => this.props.changeHandler(event,'city')} value={this.props.city} placeholder="City"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>PostCode</Form.Label>
                    <Form.Control classname="p-2" onChange={(event) => this.props.changeHandler(event,'postcode')} value={this.props.postalcode} placeholder="Postal code"/>
                </Form.Group>
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
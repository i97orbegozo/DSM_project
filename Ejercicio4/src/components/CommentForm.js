import React from 'react';
import axios from 'axios';

import {Form,Container,ButtonGroup,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Comments extends React.Component{

    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            tittle: "",
            comment: ""
        }
    }

    cancelForm = () =>{
        this.setState({
            name: "",
            email: "",
            tittle: "",
            comment: ""
        });
    }

    postDataHandler = () => {
        const data = {
            name: this.state.name,
            email: this.state.email,
            tittle: this.state.tittle,
            comment: this.state.comment
        };
        axios.post('https://dsm1-b8007.firebaseio.com/Posts.json', data)
            .then(response => {
                alert('Saved order');
                window.location.reload();
            });
    }


    render(){
        return(
            <Container>
                    <Form className="m-3 p-2">
                    <Form.Label><h2>{this.props.formLabelValue}</h2></Form.Label>
                        <Form.Row className="container-sm">                            
                            <Form.Group as={Col}>
                                <Form.Control onChange={(event) => this.setState({name: event.target.value})} value={this.state.name} className="bg-dark text-light" type="text" placeholder="Name"/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control onChange={(event) => this.setState({email: event.target.value})} value={this.state.email} className="bg-dark text-light" type="email" placeholder="Email"/>
                            </Form.Group>   
                        </Form.Row>
                        <Form.Row>
                            <Form.Control onChange={(event) => this.setState({ tittle: event.target.value})} value={this.state.tittle} className="p-2 m-2 bg-dark text-light" type="text" placeholder="Tittle"/>
                            <Form.Control onChange={(event) => this.setState({comment: event.target.value})} value={this.state.comment} className="p-2 m-2 bg-dark text-light" placeholder="Write Comment" as="textarea" style={{height: "12rem"}}/>               
                        </Form.Row>
                        <ButtonGroup>
                            <Button onClick={this.cancelForm} className="m-2 p-2" type="button" variant="outline-secondary">Cancel</Button>
                            <Button onClick={this.postDataHandler} className="m-2 p-2 text-dark" type="button" variant="warning">Submit form</Button>
                        </ButtonGroup>
                    </Form>
            </Container>
        );
    }
}
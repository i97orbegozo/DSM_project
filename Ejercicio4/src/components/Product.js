import React from 'react';
import {Nav,Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Product extends React.Component{

    render(){
        return(
        
            <Card className="p-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image}/>
            <Card.Body>
                <Card.Title>
                    {this.props.title}
                </Card.Title>
                <Card.Text>
                    {this.props.text}
                </Card.Text>
                <Card.Text>
                    {this.props.price} $
                </Card.Text>
                <Button variant="warning" onClick={this.props.clicked}>Add to cart</Button>
            </Card.Body>
            </Card>
        );
    }
}
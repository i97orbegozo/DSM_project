import React from 'react';
import {Card,Button,InputGroup,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Product extends React.Component{

    render(){
        return(
            <>
            <Card 
                className="p-2" 
                style={{ width: '18rem' }}>

                <Card.Img 
                    variant="top" 
                    src={this.props.image}
                />
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
                    
                    <InputGroup className="mb-3">
                        <Button 
                            variant="dark" 
                            style={{width:"2rem"}}
                            onClick={this.props.subsItem}
                        >-</Button>
                        <FormControl
                            className="text-center"
                            aria-label="Username"
                            aria-describedby="basic-addon1"

                            value={this.props.numItems}
                            onChange={this.props.onChangeNum}
                        />
                        <Button 
                            variant="dark" 
                            style={{width:"2rem"}}
                            onClick={this.props.sumItem} 
                        >+</Button>
                    </InputGroup>

                    <Button 
                        variant="warning" 
                        onClick={this.props.clicked}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
            </>       
        );
    }
}
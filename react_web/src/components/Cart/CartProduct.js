import React from 'react';
import {Media,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class CartProduct extends React.Component{

    render(){
        return(
            <>
            <Media as="li">
                <img
                    width={64}
                    height={84}
                    className="mr-3"
                    alt="Generic placeholder"
                    src={this.props.image}
                />
                <Media.Body className="m-1">
                    
                    <h5>{this.props.productName}</h5>
                    <div className="row">
                        <div className="col-sm">
                            <p> x {this.props.numItems}
                                <div>    
                                    Price: {this.props.price} $  
                                </div>
                            </p>
                        </div>
                        <div className="col-sm">
                        <Button 
                            variant="outline-danger"
                            className="text-rigth"
                            onClick={this.props.delete}>
                            Delete
                        </Button>
                        </div>
                    </div>

                </Media.Body>
            </Media>
            </>
        );
    }

}
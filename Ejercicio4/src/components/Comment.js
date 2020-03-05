import React from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CommentBox extends React.Component {


    render(){
        return(
            <div className="border m-2">
            <Row className="m-2 p-2">
                <Col xs={3} md={2} className="font-weight-bold">
                    {this.props.name}
                    <button className="btn btn-outline-danger badge text-wrap"  onClick={this.props.clicked} >Delete Comment</button>
                </Col>
                <Col xs={12} md={8} className="text-justify">
                    <div>
                        <h5 className="text-center bold" style={{width: '100%'}}>{this.props.title}</h5>
                        {this.props.comment}
                    </div>
                </Col>
            </Row>

        </div>            
        );
    }

}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class OrderInfo extends React.Component{
    
    render(){
        return(
            <>
            <ul className="list-group justify-content-rigth">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge badge-secondary mr-3">Name</span>
                    {this.props.name}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge badge-secondary mr-3">Surname</span>
                    {this.props.surname}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge badge-secondary mr-3">email</span>
                    {this.props.email}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge badge-secondary mr-3">Address</span>
                    <span className="text-right">
                        {this.props.address}, {this.props.city}. Postcode {this.props.postcode}
                    </span>
                </li>
            </ul>
            </>
        );
    }

}
import React from 'react';
import { NavLink,withRouter } from 'react-router-dom';

import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as Icon from 'react-bootstrap-icons';
import * as ROUTES from '../constants/Routes';


class Navigator extends React.Component {
    
    render(){
        return(
            <>
            <Navbar bg="dark" variant="dark">
                <div className="container-sm">
                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            
                        <NavLink to={ROUTES.SHOP} style={{color: 'white'}}> <Icon.House size="1.7rem"></Icon.House></NavLink>

                        </Nav.Item>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav.Item as="li" className="ml-3">
                                
                                <NavLink 
                                    to={ROUTES.ORDERS}
                                    style={{color: 'white'}}
                                >Orders</NavLink>
                            
                            </Nav.Item>
                        </Navbar.Collapse>
                    </Nav>
                    <div className="float-right">
                        {this.props.children}
                    </div>
                </div>    
            </Navbar>
            </>
        );
    }
}
Navigator = withRouter(Navigator);

export default Navigator;
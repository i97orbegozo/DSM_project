import React from 'react';
import {Form} from 'react-bootstrap';

import Navigator from '../components/Navigator';

export default class OrderProcess extends React.Component {
    constructor(){
        super();
        this.state = {
            orders: [],
            selectedPostId: null,
            error: false
        }    
    }

    
    // componentDidMount() {
    //     axios.get('https://dsmproyecto-b9b6b.firebaseio.com/Orders.json')
    //         .then(response => {
    //             let posts = [];
    //             for (let key in response.data) {
    //                 orders.push({
    //                     ...response.data[key],
    //                     idb: key
    //                 });
    //             }
    //             this.setState({ orders: orders });
    //         }).catch(error => {
    //             this.setState({ error: true });
    //         });
    // }


    // deleteCommentHandler = (id) => {
    //     axios.delete(`https://dsmproyecto-b9b6b.firebaseio.com/Orders/${id}.json`).then(() => {
    //         window.location.reload()
    //     })
    // }


    render(){
        // Lista de productos

        return(
            <>
            <Navigator>

            </Navigator>

            <div className="container-sm ">
                <div className="text-center">
                    <h1> Here orders history</h1>
                </div>
            </div>
            </>
        );

    }
}
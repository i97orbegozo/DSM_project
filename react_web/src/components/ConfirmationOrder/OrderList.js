import React from 'react';
import OrderItem from './OrderItem';


export default class OrderList extends React.Component{
    
    render(){
        const orderList =  this.props.orderList.map((list, i) => {
            return <OrderItem
                image={list.image}
                productName={list.title}
                numItems={list.numItems}
                price={list.price}
            />
        }); 
        
        return( 
            <>
            {orderList}    
            <div style={{ textAlign: 'right'}}>Total:    {this.props.totalPrice} $</div>
            </>
        );
    }

}
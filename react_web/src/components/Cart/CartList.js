import React from 'react';
import CartProduct from './CartProduct';


export default class CartList extends React.Component{

    render(){
        const cartLista = this.props.productList.map((list, i) => {
            return <CartProduct
                image={list.image}
                productName={list.title}
                numItems={list.numItems}
                price={list.price}
                delete={(event) => this.props.deleteCartItem(event,list.idb)}
            />
        }); 
        
        return( 
            <>
            {cartLista}    
            <div style={{ textAlign: 'right'}}>Total:    {this.props.totalPrice} $</div>
            </>
        );
    }

}
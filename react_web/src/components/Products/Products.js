import React from 'react';
import Product from './Product';
import { Col } from 'react-bootstrap';

export default class Products extends React.Component {

    render() {
        return this.props.products.map((post, i) => {
                return <Col className="p-2">
                        <Product
                            key={post.idb} index={i}
                            title={post.title}
                            image={post.image}
                            text={post.descrip}
                            price={post.price}
                            numItems={post.numItems}

                            subsItem={(event) => this.props.subsItem(event,post.idb,0)}
                            sumItem={(event) => this.props.subsItem(event,post.idb,1)}
                            onChangeNum={(event) => this.props.onChangeNum(event,post.idb,2)}
                            clicked={(event) => this.props.clicked(event,post.idb)} />
                    </Col>;
            });
    }
}
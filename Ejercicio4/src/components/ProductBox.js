import React from 'react';
import axios from 'axios';
import Product from './Product';

export default class ProductBox extends React.Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        //axios.get('https://firestore.googleapis.com/v1/projects/my-demoblog/databases/(default)/documents/posts/')
        axios.get('https://dsm1-b8007.firebaseio.com/Cards.json')
            .then(response => {
                let posts = [];
                for (let key in response.data) {
                    posts.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                posts = posts.slice(0, 4);
                this.setState({ posts: posts });
            }).catch(error => {
                this.setState({ error: true });
            });
    }

    // Para luego poder implementar la compra ------------------------------
    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
        console.log('Comprate algo bonito!');
    }


// -------- RENDER -------------------------
    render() {
        let productBox = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        if(!this.state.error && this.state.posts){
            productBox = this.state.posts.map(post => {
                    return <Product
                        //title={post.}
                        image={post.Photo}
                        text={post.Descrip}
                        price={post.Price}
                        clicked={() => this.postSelectedHandler(post.idb)} />;
                });
        }
        return productBox;
        
    }
}

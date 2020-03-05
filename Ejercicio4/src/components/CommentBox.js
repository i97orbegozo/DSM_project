import React from 'react';
import axios from 'axios';
import Comment from './Comment';

export default class Blog extends React.Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('https://dsm1-b8007.firebaseio.com/Posts.json')
            .then(response => {
                let posts = [];
                for (let key in response.data) {
                    posts.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                this.setState({ posts: posts });
            }).catch(error => {
                this.setState({ error: true });
            });
    }


    deleteCommentHandler = (id) => {
        axios.delete(`https://dsm1-b8007.firebaseio.com/Posts/${id}.json`).then(() => {
            window.location.reload()
        })
    }


    render() {
            let commentary = <p style={{ textAlign: 'center' }}>Loading...!</p>;
            if(!this.state.error && this.state.posts){
                commentary = this.state.posts.map(post => {
                        return <Comment
                            name={post.name}
                            comment={post.comment}
                            title={post.tittle}
                            clicked={() => this.deleteCommentHandler(post.idb)} />;
                    });
            }
            return commentary;
    }
}

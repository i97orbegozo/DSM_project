import React from 'react';
import './App.css';

import {Container,CardDeck} from 'react-bootstrap';

import CommentForm from './components/CommentForm';
import CommentBox from './components/CommentBox';
import ProductBox from './components/ProductBox';

export default class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Container className="container-sm">
          <h1 className="text-center bold p-5">SNEAKERS SHOP</h1>
          <CardDeck className="p-3">
            <ProductBox></ProductBox>
          </CardDeck>
          <Container className="text-light bg-dark">
              <CommentForm formLabelValue="Insert a new Comment" />
                <div className="container-sm bg p-2 ">
                  <h2 className="text-center p-2 m-2 font-weight-bold">Comment Box</h2>
                  <CommentBox></CommentBox>

                </div>
          </Container>
        </Container>
      </div>
    );
  }
}

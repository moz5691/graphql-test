import React, { Component } from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBooks';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";

import './App.css';

// apollo client set up
const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
})

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <div className="App">
              <h1>Reading List</h1>
               <BookList/>
               <AddBook/>
          </div>
        </ApolloProvider>
    );
  }
}

export default App;

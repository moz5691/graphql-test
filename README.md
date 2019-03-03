###GraphQL server and Apollo Client :


####General API folow is like below:

[React, Apollo Client] <---> [Express, GraphQL server] <---> [MongoDB]


####The following is to use Graphiql client to input data.


```javascript 
mutation{
  addBook(name: "find my alice", 
          genre: "fiction", 
          authorId: "5c79af747519637cd22ca0ff"){
    name
    genre
    
  } 
}



mutation{
  addAuthor(name:"John King", age: 70){
    name
    age
  }

}
```
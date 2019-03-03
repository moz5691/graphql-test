import React from 'react';
import {graphql} from 'react-apollo';
import {getBookQuery} from "../queries/queries";

const BookDetail = (props) => {
    console.log(props);
    const {book} = props.data;
    if(!book) return <p>Book info not available</p>

    return (
        <div>
            <p>The selected book detail</p>
            <p>Title: {book.name}</p>
            <p>Genre: {book.genre}</p>
            <p>Author: <strong>{book.author.name}</strong> and author's books are : </p>
            <ul>
                {book.author.books.map(book=><li key={book.id}> {book.name} </li>)}
            </ul>

        </div>
    );
};

export default graphql(getBookQuery,{
    options:(props)=>{
        return {
            variables:{
                id:props.bookId
            }
        }
    }
})(BookDetail);
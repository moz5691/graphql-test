import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from "../queries/queries";
import BookDetail from './BookDetail';

class BookList extends Component {

    state ={
        selected: null
    }

    handleSelect = (id) =>{
        this.setState({selected: id})
    }

    displayBooks = () => {
        const {data} = this.props;
        if( data.loading) {
            return <div>Loding data...</div>
        }
        return data.books.map((book,i)=><li key={book.id}
                                            onClick={()=>this.handleSelect(book.id)}>
                                            {book.name}
                                        </li>);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <ul>
                    {this.displayBooks()}
                </ul>
                <BookDetail bookId={this.state.selected}/>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
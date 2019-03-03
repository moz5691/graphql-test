import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from "../queries/queries";


class AddBooks extends Component {

    state = {
        name: '',
        genre: '',
        authorId: ''
    };

    displayAuthors = () =>{
        console.log('getAuthorsQuery', this.props.getAuthorsQuery)
        const data = this.props.getAuthorsQuery;
        if(data.loading){
            return <option disabled={true}>Loading Authors...</option>
        }
        return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
    };


    handleOnChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBookMutation({
            variables:{
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries:[{query: getBooksQuery}]
        }
        );


        this.setState({name: '', genre:'', authorId:''})

    };

    render() {
        const {name, genre, authorId} = this.state;
        return(
            <div>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Book name</label>
                    <input type="text"
                           value={name}
                           name='name'
                           onChange={this.handleOnChange}/>
                </div>
                <div>
                    <label>Genre</label>
                    <input type="text"
                           value={genre}
                           name="genre"
                           onChange={this.handleOnChange}/>
                </div>
                <div>
                    <label>Author</label>
                    <select name="authorId"
                            value={authorId}
                            onChange={this.handleOnChange}>
                        <option value="">Select Author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>

            </div>
        )
    }
}


export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBooks);

// export default graphql(getAuthorsQuery)(AddBooks)
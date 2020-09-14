import React, {Component} from 'react';
// import './App.css';
import Table from './component/Table.js';
import Form from './component/Form.js';

class App extends Component {
  state = {
    books: []
  };

  removeBook = (index) => {
    const {books} = this.state;

    this.setState({
      books: books.filter((book, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = (book) => {
    this.setState({books: [...this.state.books, book]}); // spread operator
  }

  render(){
    return (
      <div className="container">
        <h1>Book List</h1>
        <p>Add a book with it's name and author(s) to the table.</p>

        <h3>Add New Book</h3>
        <Form handleSubmit={this.handleSubmit} />

        <Table bookList={this.state.books} removeBook={this.removeBook} />

      </div>
    );
  }

}

export default App;

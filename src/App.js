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

    if(!window.confirm("Are you sure?")){
      return;
    }

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
        <h1 className="AppTitle">Book List</h1>
        <p className="instruction pb-1">Add a book with it's name and author(s) to the table.</p>

        <div className="card shadow">
          <div className="card-body">
            <h3>Add New Book</h3>
            <Form handleSubmit={this.handleSubmit} />
          </div>
        </div>

        <div className="card shadow mt-3">
          <div className="card-body">
            <Table bookList={this.state.books} removeBook={this.removeBook} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;

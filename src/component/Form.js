import React, {Component} from 'react';

export default class Form extends Component{
  constructor(props){
    super(props);

    this.initialState = {
      bookname: '',
      authors: ''
    };

    this.state = this.initialState;
  }

  handleChange = e => {
    const {name, value} = e.target; // destructuring
    this.setState({
      [name] : value
    });
  }

  onFormSubmit = e => {
    e.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render(){
    const {bookname, authors} = this.state;

    return(
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="bookname">Book Name</label>
        <input type="text" name="bookname" value={bookname} onChange={this.handleChange} />

        <label htmlFor="authors">Author(s)</label>
        <input type="text" name="authors" value={authors} onChange={this.handleChange} />
        <button type="submit">Save</button>
      </form>
    );
  }
}

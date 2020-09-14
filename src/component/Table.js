import React from 'react';
import TableHeader from './TableHeader.js';
import TableBody from './TableBody.js';


const Table = (props) => {
  const {bookList, removeBook} = props;

  return(
    <table>
      <TableHeader />
      <TableBody bookList={bookList} removeBook={removeBook} />
    </table>
  );
}

export default Table;

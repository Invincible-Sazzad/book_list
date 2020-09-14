import React from 'react';
import TableHeader from './component/TableHeader.js';
import TableBody from './component/TableBody.js';


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

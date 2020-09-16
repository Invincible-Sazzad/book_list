import React from 'react';
import TableHeader from './TableHeader.js';
import TableBody from './TableBody.js';


const Table = (props) => {
  const {bookList, removeBook} = props;

  return(
      <div className="table-responsive">
          <table className="table-striped table-bordered">
            <TableHeader />
            <TableBody bookList={bookList} removeBook={removeBook} />
          </table>
      </div>
  );
}

export default Table;

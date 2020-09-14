import React from 'react';

export default function TableBody(props){
  const tableRows = props.bookList.map((value, index) => {
    return(
        <tr key={index}>
          <td>{value.bookname}</td>
          <td>{value.authors}</td>
          <td><button onClick={() => props.removeBook(index)}>Remove</button></td>
        </tr>
    );
  });

  return <tbody>{tableRows}</tbody>;
}

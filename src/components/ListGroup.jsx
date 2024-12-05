import { fragment } from "react";

function ListGroup() {

    let items = [
        'New York',
        'San',
        'JSX',
        'London',
        'Tokyo'
    ];
    //items = [];

    
  //  const Message = items.length == 0 ? <p>No item found</p> : null

    
    return (
        <>
            <h1>List</h1>
            { Message }
        <ul className="list-group">
                {items.map(item => (
                    <li key = {item}>{item}</li>))}
            </ul>
        </>
    )
    
}

export default ListGroup;

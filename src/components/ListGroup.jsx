

function ListGroup() {

    let items = [
        'New York',
        'ASia',
        'JSX',
        'London',
        'Tokyo'
    ];
    //items = [];

    
  //  const Message = items.length == 0 ? <p>No item found</p> : null

    
    return (
        <>
            <h2>List</h2>
          
        <ul className="list-group">
                {items.map(item => (
                    <li key = {item}>{item}</li>))}
            </ul>
        </>
    )
    
}

export default ListGroup;

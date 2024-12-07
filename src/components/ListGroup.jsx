

function ListGroup() {

    let items = [
        'New York',
        'ASia',
        'JSX',
        'London',
        'Tokyo'
    ];
    //event handler
    const handleClick = (event: "MouseEvent") => console.log(event);

    
    return (
        <>
            <h2>List</h2>
            { getMessage()}
        <ul className="list-group">
                {items.map(item => (
                    <li key = {item}>{item}</li>))}
            </ul>
        </>
    )
    
}

export default ListGroup;

import { fragment } from "react";

function ListGroup() {

    const items = [

        'New York',
        'San',
        'JSX',
        'London',
        'Tokyo'
    ];
    
    return (
        <>
        <h1>List</h1>
        <ul className="list-group">
                {items.map(item => (
                    <li>{item}</li>))}
            </ul>

        </>
    )
}

export default ListGroup;
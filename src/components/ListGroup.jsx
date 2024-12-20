import { useState } from "react";
// { items: [] , heading: string }



function ListGroup({ items, heading }) {

 
    const [selectedIndex, setSelectedIndex] = useState(-1)

return (
        <>
            <h2>List</h2>
            {items.length == 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => setSelectedIndex(index)}

                    >{item}</li>))}
            </ul>
        </>
    );
    
}

export default ListGroup;

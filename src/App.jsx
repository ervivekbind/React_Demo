
import ListGroup from "./components/ListGroup";

function App() {

    let items = [
        'New York',
        'ASia',
        'JSX',
        'London',
        'Tokyo'
    ];
    return <div><ListGroup items={items} heading="cities" /></div>;
}
export default App;
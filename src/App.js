import React, {useState} from 'react';
import Button from "./components/Button/Button";
import './App.css';

function App() {
        const [ count, setCount ] = useState( 0)

        function addOne() {
        setCount(count + 1)
    }

        function subtractOne() {
        setCount(count - 1)
    }

        return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div>
            <p>Aardbeien</p>
            <Button
                type="button"
                className="btn"
                clickHandler={ subtractOne }
            >
                -
            </Button>
            <p>{ count }</p>
            <Button
                type="button"
                className="btn"
                clickHandler={ addOne }
            >
                +
            </Button>
            </div>

    </>
  );
}

export default App;

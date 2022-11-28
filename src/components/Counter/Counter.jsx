
import React from 'react';
import Button from "../Button/Button"

    function Counter({ setFruitCount, fruitCount }) {
        return (
            <>
                <Button type="button" clickHandler={() => {if(fruitCount>0) setFruitCount(fruitCount - 1)}}>
                    -
                </Button>
                <p>{fruitCount}</p>
                <Button type="button" clickHandler={() => setFruitCount(fruitCount + 1)}>
                    +
                </Button>
            </>
        );
    }

export default Counter;
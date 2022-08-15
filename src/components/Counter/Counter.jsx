import "./Counter.scss";
import {useState} from 'react';

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    const decrementCounter = () => {
        counter > 0? setCounter(counter - 1): setCounter(counter);
    }

    return (
        <div className="miniCard">
            <h3>Counter</h3>
            <h4>{counter}</h4>
            <button onClick={decrementCounter}>-</button>
            <button onClick={incrementCounter}>+</button>
        </div>
    )
}

export default Counter;
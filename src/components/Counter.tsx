import { useState } from "react"
import styles from './counter.module.scss'


export const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div className={styles.btn}>
            <h1>Counter {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
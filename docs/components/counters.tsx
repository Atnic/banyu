// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from './counters.module.css'
import {Button} from '@banyu/core';

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <Button
        className="bg-red-500"
        label={'Button'}
        size={'small'}
        primary
      >button</Button>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}

import { useState } from 'react'

const State = () => {
  const [count, setCount] = useState<number>(0)
  /*
    this doest not increment or decrement twice, 
    because the count value remains the same when it was render
    basically were calling it twice with same value
    0 + 1 which is 1, then 0 + 1 which is 1 again
  */
  //  const increment = () => { setCount(count + 1); setCount(count + 1) }
  //  const decrement = () => { setCount(count - 1); setCount(count - 1) }

  
  // always prefer using this method
  const increment = () => { setCount(prev => prev + 1); setCount(prev => prev + 1) }
  const decrement = () => { setCount(prev => prev - 1); setCount(prev => prev - 1) }
  
  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
        <button onClick={decrement}>- 2</button>
        <p>{count}</p>
        <button onClick={increment}>+ 2</button>
      </div>
      <br />
    </>
  )
}

export default State
import { useState, useMemo, useEffect } from 'react'



const slowFunction = (num: number) => {
  console.log('slow function is called')
  const LOOP_LENGTH = 1_000_000_000
  for (let i = 0; i <= LOOP_LENGTH; i++) { null }
  return num * 2
}

const Memo = () => {
  const [number, setNumber] = useState<number>(0)
  const [dark, setDark] = useState<boolean>(false)
  
  // without useMemo, the slowFunction will be called every time component re-renders
  // eg - when the dark state is changed
  // now with useMemo, the slowFunction is only called every time there a change in number
  const doulbeNumber = useMemo(() => slowFunction(number), [number])
  // memoize means to cache the value, so its not re computed every time, unless the value
  // in dependency array changes, in our case - the number state
  // only use useMemo on this kind of situations, useMemo is called everytime component renders
  // there is an overhead

  // without useMemo, this object gets re created every time component renders
  // but in our case, we only really need to create it once, since the values are the same
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  console.log('Renders')

  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])



  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prev => !prev)}>Change Theme</button>
      <div style={themeStyles}>{doulbeNumber}</div>
    </div>
  )
}

export default Memo
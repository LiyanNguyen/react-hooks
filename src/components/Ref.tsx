import { ChangeEvent, useEffect, useRef, useState } from 'react'

const Ref = () => {
  const [name, setName] = useState<string>()
  const inputRef = useRef <HTMLInputElement>(null)
  const renderCount = useRef(1)
  
  
  // you would notice that everytime the input value changes, the component renders
  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })
  
  // if you remove the onChange function on the input, every time we type on the input, it doesnt render
  // but we can now then update the value of name using the submit name button
  // because refs persits between rerenders
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }


  return (
    <>
      <input ref={inputRef} type="text" onChange={handleOnChange}/>
      {/* <input ref={inputRef} type="text" /> */}
      <p>My name is: {name}</p>
      <p>I render {renderCount.current} times</p>
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
      <button onClick={() => setName(inputRef.current?.value)}>Submit Name</button>
    </>
  )
}

export default Ref
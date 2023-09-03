import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const LayoutEffect = () => {
  const [show, setShow] = useState<boolean>(false)
  const popup = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  // this effect will run AFTER the initial render (browser painting)
  useEffect(() => {
    if (popup.current === null || button.current === null) return
    const { bottom } = button.current.getBoundingClientRect()
    popup.current.style.top = `${bottom + 25}px` //this effect is not applied at all
  }, [])

  // this effect runs SYNCHRONOUSLY as the component renders and re-renders (browser painting)
  // useLayoutEffect(() => {
  //   if (popup.current === null || button.current === null) return    
  //   const { bottom } = button.current.getBoundingClientRect()
  //   popup.current.style.top = `${bottom + 25}px`      
  // }, [])

  return (
    <>
      <button ref={button} onClick={() => setShow(prev => !prev)}>Click here</button>
      {show && 
        <div style={{position: 'absolute'}} ref={popup}>
          this is a popup
        </div>
      }
    </>
  )
}

export default LayoutEffect
import { ChangeEvent, useDeferredValue, useMemo, useState } from 'react'

const LargeList = ({value} : {value: string}) => {
  const LIST_SIZE = 20_000

  const deferredValue = useDeferredValue(value)

  const listElementsArray = useMemo(() => {
    const listArray = []
    for (let i = 0; i < LIST_SIZE; i++) {
      listArray.push(<div key={i}>{deferredValue}</div>)
    }

    return listArray
  }, [deferredValue])

  return listElementsArray
}

const DeferredValue = () => {
  const [value, setValue] = useState<string>('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <p>value: {value}</p>
      <input type="text" value={value} onChange={handleOnChange} />
      <p>deferred value: </p>
      <LargeList value={value} />
    </div>
  )
}

export default DeferredValue
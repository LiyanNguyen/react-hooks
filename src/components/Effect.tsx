import { useEffect, useState } from 'react'

const Effect = () => {
  const [resourceType, setResourceType] = useState<string>('posts')
  const [data, setData] = useState<{ id: string }[]>([])
  
  useEffect(() => {
    console.log('onMount')

    return () => console.log('return')
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then((json: { id: string }[]) => setData(json))
      .catch(err => console.log(err))
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {data.map(item => 
        <pre key={item.id}>{JSON.stringify(item)}</pre>  
      )}
    </>
  )
}

export default Effect
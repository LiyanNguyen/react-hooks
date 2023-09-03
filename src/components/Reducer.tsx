import { useState, useReducer, FormEvent } from 'react'

const ACTIONS = {
  ADD_TODO: 'add-todo' 
}

const reducer = (todos, action) => { 
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
  }

}

const newTodo = (name: string) => {
  return {id: Date.now(), name: name, complete: false}
}

const Reducer = () => {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState<string>('')

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name} })
    setName('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id=""  value={name} onChange={(e) => setName(e.target.value)}/>
      </form>
    </>
  )
}

export default Reducer
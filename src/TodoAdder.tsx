import { useState } from "react"

interface Todo {
  id: number
  text: string
}

const TodoAdder = () => {
  const [inputText, setInputText] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = () => {
    if (!inputText.trim()) return
    setTodos([...todos, { id: Date.now(), text: inputText }])
    setInputText("")
  }

  return (
    <div>
      <h2>Todo Adder</h2>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="New task" />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoAdder

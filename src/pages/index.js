import React, { useState } from "react"

import { MarigoldProvider } from "@marigold/system"
import theme from "@marigold/theme-b2b"
import { AddTodoForm } from "./AddTodoForm"
import { TodoList } from "./TodoList"
import { Alert, Heading, Text } from "@marigold/components"

const initialItems = [
  {
    text: "Bananas",
    complete: false,
  },
  {
    text: "Pineapples",
    complete: false,
  },
  {
    text: "Mangos",
    complete: false,
  },
]

const IndexPage = () => {
  const [todos, setTodos] = useState(initialItems)

  var displayAlert = false
  if (todos.every(item => item.complete === true)) {
    displayAlert = true
  } else {
    displayAlert = false
  }

  const toggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo = text => {
    const newTodo = { text, complete: false }
    setTodos([...todos, newTodo])
  }

  return (
    <MarigoldProvider theme={theme}>
      <div style={{ margin: "64px", maxWidth: "25%" }}>
        <Heading>Shopping List</Heading>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
        {displayAlert ? (
          <Alert id="alert" variant="success">
            <Text style={{ color: "white" }}>Groceries done.</Text>
          </Alert>
        ) : (
          ""
        )}
      </div>
    </MarigoldProvider>
  )
}

export default IndexPage

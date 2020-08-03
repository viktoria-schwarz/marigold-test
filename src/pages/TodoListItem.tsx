import React from "react"

import { Label, Checkbox } from "@marigold/components"

interface Props {
  todo: Todo
  toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <Label htmlFor={todo.text} css={{ display: "block" }} key={todo.text}>
      <Checkbox
        id={todo.text}
        checked={todo.complete}
        onClick={() => {
          toggleTodo(todo)
        }}
      />
      {todo.text}
    </Label>
  )
}

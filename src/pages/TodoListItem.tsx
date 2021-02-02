import React from "react"

import { Label, Checkbox } from "@marigold/components"
import { useStyles } from "@marigold/system"

// interface Props {
//   todo: Todo
//   toggleTodo: ToggleTodo
// }

export const TodoListItem = ({ todo, toggleTodo }) => {
  return (
    <Label htmlFor={todo.text} classNames={useStyles({ display: "block" })} key={todo.text}>
      <Checkbox
        id={todo.text}
        checked={todo.complete}
        onClick={() => {
          toggleTodo(todo)
        }}
      />
      {todo.text}
      <br />
    </Label>
  )
}

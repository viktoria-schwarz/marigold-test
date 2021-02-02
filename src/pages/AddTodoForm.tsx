import React, { useState } from "react"

import { Button, Input } from "@marigold/components"
import { Add } from "@marigold/icons"
import { useStyles } from "@marigold/system"

// export interface Props {
//   addTodo: AddTodo
// }

export const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState("")

  return (
    <form>
      <Input
        placeholder="Enter new item..."
        htmlFor="id"
        value={text}
        onChange={e => {
          setText(e.target.value)
        }}
        className={useStyles({ marginTop: '16px' })}
      />
      <Button
        variant="ghost.small"
        className={useStyles({
          marginTop: '16px',
        })}
        type="submit"
        onClick={e => {
          e.preventDefault()
          if (text != "") {
            addTodo(text)
            setText("")
          }
        }}
      >
        <Add /> Add item
      </Button>
    </form>
  )
}

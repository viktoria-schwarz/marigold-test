import React, { useState } from "react"

import { Button, TextInput } from "@marigold/components"
import { Add } from "@marigold/icons"

interface Props {
  addTodo: AddTodo
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("")

  return (
    <form>
      <TextInput
        placeholder="Enter new item..."
        my={3}
        value={text}
        onChange={e => {
          setText(e.target.value)
        }}
      />
      <Button
        variant="ghost.small"
        my={3}
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

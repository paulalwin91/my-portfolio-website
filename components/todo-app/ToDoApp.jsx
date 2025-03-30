'use client'
import NewTodoForm from "./NewTodoForm"

import "./styles.css"
import { useState, useEffect } from "react"
import TodoList from "./TodoList"

export default function ToDoApp()
{

  const [items, setItems] = useState(() =>
  {
    return JSON.parse(localStorage.getItem('items')) || []
  })

  useEffect(() =>
  {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  function handleAdd(newItem)
  {
    setItems(current =>
    {
      return [...current, {
        id: Date.now(),
        title: newItem,
        completed: false
      }]
    })
  }


  function handleToggle(id)
  {
    setItems(current =>
    {
      return current.map(item =>
      {
        if (item.id !== id) return item
        return { ...item, completed: !item.completed }
      })
    })
  }


  function handleDelete(id)
  {
    setItems(current =>
    {
      return current.filter(item => item.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm handleAdd={handleAdd} />
      <h1 className="header">Todo List</h1>
      <TodoList items={items} handleToggle={handleToggle} handleDelete={handleDelete} />
    </>
  )
}

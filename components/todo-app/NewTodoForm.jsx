import { useState } from "react"



export default function NewTodoForm({ handleAdd })
{
    const [newItem, setNewItem] = useState('')

    function handleSubmit(e)
    {
        e.preventDefault()

        if (newItem === '') return

        handleAdd(newItem)
        setNewItem('')
    }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}
        >
            <div className="form-row">
                <label htmlFor="item">Add a new Item below!</label>
                <input value={newItem}
                    onChange={e => setNewItem(e.target.value)} type="text" id="item" />
            </div>
            <button className="btn">Add</button>
        </form >
    )
}

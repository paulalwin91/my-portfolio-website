import Item from "./Item"

export default function TodoList({ items, handleToggle, handleDelete })
{
    return (
        <ul className="list">
            {items.length === 0 && <b><i>No Items</i></b>}
            {items.map(item =>
            {
                return (<Item key={item.id} {...item} handleToggle={handleToggle} handleDelete={handleDelete} />)
            })}
        </ul >
    )
}

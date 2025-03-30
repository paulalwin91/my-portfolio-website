

export default function Item({ id, title, completed, handleToggle, handleDelete })    
{
    return (<li key={id} >
        <label>
            <input type="checkbox" checked={completed}
                onChange={e => handleToggle(id)}
            />
            <span>{title}</span>
        </label>
        <button className="btn btn-danger"
            onClick={e => handleDelete(id)}
        >Delete</button>
    </li>)
}
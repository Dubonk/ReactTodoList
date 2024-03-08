export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li className="listItem">
          {title.toUpperCase()}
    <label>
      completed:
      <input type="checkbox" checked= {completed} onChange={e => toggleTodo(id, e.target.checked)}/>
    </label>
    <button className='btnDelete' onClick={() => deleteTodo(id)}>Delete</button>
  </li>
    )
}
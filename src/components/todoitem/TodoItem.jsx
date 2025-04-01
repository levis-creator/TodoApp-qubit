import "./TodoItem.css"
function TodoItem({data}) {
    return (
        <div className="todo-card">
            <div className="todo-head">
                <div className="todo-title">
                    <h3>
                        {data.task}
                    </h3>
                </div>
                <button>
                    icon
                </button>
            </div>
            <div className="todo-desc">
               {data.desc}
            </div>
        </div>
    )
}
export default TodoItem
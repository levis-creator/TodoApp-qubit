import './App.css'
import Navbar from './components/navbar/Navbar'
import TodoItem from './components/todoitem/TodoItem'


function App() {
  const title = "Task app"
  const data = [
    {
      task: "Do assignment",
      desc: "Should be done by 5am"
    },
    {
      task: "Complete Project",
      desc: "The deadline is 3days to come"
    }
  ]
  
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>{title}</h1>
        <div className='todo-list'>
          {
            data.map(
              (item, i)=>(
                <TodoItem key={i} data={item}/>
              )
            )
          }
        </div>
      </div>

    </div>
  )
}

export default App

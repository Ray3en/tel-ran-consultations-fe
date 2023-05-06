import { useEffect, useState } from "react";
import TodosList from "./components/TodosList";
import Pagination from "./components/Pagination";


function App() {

  const [todos, setTodos] = useState([])
  const [crntPage, setCrntPage] = useState(1)
  const [countTodosPage, setCountTodosPage] = useState(10)

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.sort(() => Math.random() - 0.5)
        setTodos(data)
      })
  },[])

  const lastElem = crntPage * countTodosPage
  const firstElem = lastElem - countTodosPage
  const todosPageList = todos.slice(firstElem,lastElem)
  const countElem = Math.ceil(todos.length / countTodosPage )

  console.log(todosPageList)
 
  return (
    <div>
      <TodosList todos={todosPageList}/>
      <Pagination setCrntPage={setCrntPage} countElem={countElem} crntPage={crntPage}/>
    </div>
  );
}

export default App;

let array = [1,2,3,4,5,6,7,8,9,10]

let newArray = array.slice().sort(() => Math.random() - 0.5).slice(0,3)

console.log(newArray)
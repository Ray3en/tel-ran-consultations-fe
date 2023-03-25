import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css'
import { fetchEmployees } from "./asyncActions/employees";

function App() {
  const empl = useSelector(store => store.empl)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('empl', JSON.stringify(empl))
  }, [empl])

  // useEffect(() => {
  //   dispatch(fetchEmployees())
  // },[])

  return (
    <div>
      <div className="header_elem" align='center'>Header</div>
      <div>
        <button onClick={() => dispatch({type: 'DELETE_EMPL'})}>удалить последнего сотрудника</button>
        <button onClick={() => dispatch(fetchEmployees())}>добавить список сотрудников</button>
      </div>
      <div >
        {empl.map(elem => 
            <div key={elem.id}>
              <h1>{elem.name}</h1>
              <p>{elem.email}</p>
            </div>
          )}
    </div>
    <div>
    <div className="border_elem">
      <div className="img_elem">
  
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";


function App() {

  const products = useSelector(store => store).filter(elem => elem.show)
  console.log(products)
  const dispatch = useDispatch()

  function salesHandle(e){
    dispatch({type: 'SALES_CHECKBOX', payload: e.target.checked })
  }

  return (
    <div>
      <div>
        <label>
          Отобразить товары со скидкой
          <input type='checkbox' onClick={salesHandle}/>
        </label>
      </div>
      <div>
        {products.map(elem => 
            <div key={elem.id}>
              <h2>{elem.name}</h2>
              <p>{''+elem.sales}</p>
            </div>
        )}
      </div>
    </div>
  );
}

export default App;

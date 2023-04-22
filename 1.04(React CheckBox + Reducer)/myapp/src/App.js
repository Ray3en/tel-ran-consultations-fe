import { useDispatch, useSelector } from "react-redux";


function App() {

  const products = useSelector(store => store).filter(elem => elem.show && elem.showPrice)
  const dispatch = useDispatch()

  function salesHandle(e){
    dispatch({type: 'SALES_CHECKBOX', payload: e.target.checked })
  }

  const filterByPrice = (e) => {
      let data = Object.fromEntries(new FormData(e.target.parentNode))
      data.min = (data.min === '') ? -Infinity : +data.min
      data.max = (data.max === '') ? Infinity : +data.max
      dispatch({type: 'FILTER_PRICE', payload: data})
  }

  return (
    <div>
      <div>
        <label>
          Отобразить товары со скидкой
          <input type='checkbox' onClick={salesHandle}/>
        </label>
        <form onChange={filterByPrice}>
          <input name="min" type="number" placeholder="От"/>
          <input name='max' type="number" placeholder="До"/>
        </form>
      </div>
      <div>
        {products.map(elem => 
            <div style={{border: '1px solid black', padding: '10px'}} key={elem.id}>
              <h2>{elem.name}</h2>
              <p>{''+elem.sales}</p>
              <p>{elem.price}</p>
            </div>
        )}
      </div>
    </div>
  );
}

export default App;

import products from './datas/products.json'
import categories from './datas/categories.json'
import { useEffect } from 'react';

function App() {

  // Данные из ./datas/products.json
  // console.log(products)
  // console.log(categories)

  // Пример сетевого запроса задеплоенного back приложения
  useEffect(() => {
    let url = 'https://project-fe-vxeu.onrender.com/products/all'
    fetch(url)
      .then(res => res.json())
      .then(console.log)
  }, [])

  return (
    <div>
      123
    </div>
  );
}

export default App;

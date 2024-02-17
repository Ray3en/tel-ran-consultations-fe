import { useEffect, useState } from 'react';
import './style.css'
import ProductItem from './components/ProductItem';


function App() {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProducts()
  }, [])


  const getProducts = async () => {
    setLoading(true)
    const res = await fetch(`https://dummyjson.com/products?limit=9&skip=${page}`)
    const data = await res.json()
    setProducts([...products, ...data.products])
    setPage(page + 9)
    setLoading(false)

  }

  console.log(products)

  useEffect(() => {
    if (!loading){
      const handleScroll = () => {
        if (
          document.documentElement.offsetHeight > 
          Math.floor( document.documentElement.scrollTop + window.innerHeight)
          )return;
        getProducts()
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [loading])


  return (
    <div className='container'>
        {products.map(elem => <ProductItem key={elem.id} product={elem}/>)}
        <h2>{loading ? 'Loading': ''}</h2>
    </div>
  );
}

export default App;

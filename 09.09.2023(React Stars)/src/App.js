import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css'


function App() {

  const url = "https://dummyjson.com/products";
  const[items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data.products))
  }, [])

  const deleteCard = (id) => {
    let filtered_items = items.filter(elem => elem.id !== id)
    setItems(filtered_items)
  }


  return (
    <div className="root">
      <Header/>
      <Cards items={items} deleteCard={deleteCard}/>
      <Footer/>
    </div>
  );
}

export default App;

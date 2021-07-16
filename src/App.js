  import './App.css';
  import Products from './Products'
  import Product from './Product'
  import Basket from './Basket'
  import {useState} from 'react'

  /*
    Rendering shopping basket

    Use prepared Basket component to render the names of products in
    the shoppingBasket. 

    The user should be able to add an item to the basket by clicking
    Add to basket button in Product.js
    
  */

  function App() {
    
    const [product, setProduct] = useState(null)
    const [shoppingBasket, setShoppingBasket] = useState({})
    const [cartItems, setcartItems] = useState([]);

    // const {product} = data;
  const onAdd = () =>{

    setcartItems([...cartItems, {...product}])
    
  }
      

    const changeProduct = (product) => {
      setProduct(product)
    }
    // console.log(product)
    return (
      <div className="App">
        <Products setProduct={changeProduct}/>
        {product ? <Product onAdd={onAdd} product={product}/> : ""}
        <Basket  cartItems ={cartItems}></Basket>
      </div>
    );
  }

  export default App;


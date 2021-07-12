import { useState } from 'react'

function Products(props) {

  const [filterItems, setFilterItems] = useState(false)

  const products = [
    {
      name: "Shirt",
      price: 45
    },
    {
      name: "Coat",
      price: 125
    },
    {
      name: "Trainers",
      price: 30
    },
    {
      name: "Tie",
      price: 15
    },
  ]

  const filterProducts = () => {
    return products.filter((products) => {
      if(products.price < 35) {
        return true
      }
      return false
    })
  }

  const handleFilter = () => {
    setFilterItems(true)
  }

  const displayProduct = (product) => {
    console.log("in Products component display product")
    props.setProduct(product)
  }

  const renderProducts = (products) => {
    return products.map((product) => {
      return <p onClick={() => displayProduct(product)} key={product.name}>{product.name}</p>
    })
  }

  return (
    <div>
      {filterItems ? renderProducts(filterProducts()): renderProducts(products)}
      <button onClick={handleFilter}>Show items costing less than 35 £</button>
    </div>
  );
}

export default Products
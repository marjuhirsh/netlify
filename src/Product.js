

// function clickMe(){
//   alert ("Product Selected")
  
// }
function Product(props) {
  const{product, onAdd} = props;
  return (
    <div>
      <h1>{props.product.name}</h1>
      <h2>{props.product.price}</h2>
      <button onClick ={onAdd}>Add to Basket </button>
    </div>
  )
}

export default Product
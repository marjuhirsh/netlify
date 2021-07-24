function Basket(props) {
  const {cartItems} = props;
  return (
       <div>
          <ul>Basket Items:    
              {cartItems.map((item) => 
                <li key={`item-${item.name}`}>
                  {item.price} {item.name}             
                </li>)}
       
        </ul>
      </div>
      
         )

 }

 export default Basket
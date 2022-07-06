import React from 'react'

function ProductCard(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
    <img src={props.data.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <h6 className="card-title">₹ {props.data.price}</h6>
        <p className="card-text"></p>
        <button   disabled = {props.carditems.some(obj => obj.id ===props.data.id)} onClick={() => props.addCart(props.data.id)} href="#" className="btn btn-primary">Add to Cart</button>
      </div>
  </div>    
)

  
}

export default ProductCard
//
// import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import ProductCard from './ProductCard'
import Totalcard from './Totalcard';
function App(){
  const products = [
      {
        id: 1,
        name: 'real me',
        price:9999,
        img: "https://m.media-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg",
      },
      {
        id: 2,
        name: ' i phone',
        price: 129990,
        img: "https://m.media-amazon.com/images/I/61sDyXAepuL._SL1500_.jpg",
      },
      {
        id: 3,
        name: 'samsung',
        price: 23999,
        img: "https://images-eu.ssl-images-amazon.com/images/I/41O1C449O1L._SX300_SY300_QL70_FMwebp_.jpg",
      },
      {
        id: 4,
        name: 'one plus',
        price: 45999,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/41E5Bva7sOL._SX300_SY300_QL70_FMwebp_.jpg',
      },
      {
        id: 5,
        name: 'oppo',
        price: 14000,
        img: 'https://m.media-amazon.com/images/I/71zbz1O+hqL._AC_UY218_.jpg',
      },
      {
        id: 6,
        name: 'nokia',
        price:8000,
        img: 'https://m.media-amazon.com/images/I/51zPkPkfKiL._AC_UY218_.jpg',
      },
      {
        id: 7,
        name: 'lava',
        price:6000,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/41MM0Fe-lHL._SX300_SY300_QL70_FMwebp_.jpg',
      },
      
    ]
        const [CartItems,setCartItems]= useState([])
        const [total,setTotal]=useState(0)


        let addCart=(id)=>{
            let index=products.findIndex(obj=>obj.id===id)
        let indexs=products[index]
        setCartItems([...CartItems,indexs])
        console.log(CartItems)
        setTotal(total+indexs.price)
         }

          let removecart=(id)=>{
              let index1=CartItems.findIndex(obj=>obj.id===id)
              setTotal(total- CartItems[index1].price) 
            
        CartItems.splice(index1,1)
        setCartItems([...CartItems])
       
      }
  return(

      
      <div className='container'>
      <div className='row'>
        <div className='col-lg-8'>
          <h5>Products</h5>
          <div className='row'>
              {
                  products.map((product)=>{
                      return (
                          <ProductCard data={product} carditems={CartItems}  addCart={addCart}/>
                      ) 
                  }
                  )}
            
          </div>
        </div>
        <div className='col-lg-4'>
          <h5>Cart</h5>
          <ol className="list-group list-group-numbered">


            {
            CartItems.map((element)=>{
                return ( <Totalcard data={element} removecart={removecart}  ></Totalcard>
               ) })        
                 }
            
          </ol>
          <h2>Total: {total}</h2>
        </div>
      </div>
    </div >
  )
}

export default App;

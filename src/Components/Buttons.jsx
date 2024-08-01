
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
export default function Buttons({itms,update,setupdate}) {
  const [card,setcard]=useState([])
  const [count,setc]=useState(0)
  const addtocard=(id,price,qty)=>{
    let copy=[...card];
    let index=copy.findIndex(it=>it.id==id)
    if(index==0){
      let nweproducts=copy[index]
      copy[index]={...nweproducts,qty:nweproducts.qty+1,price:(price)+(nweproducts.price)}

    }
    else{
      copy.push({id,price,qty})
    }
    setcard(copy)
    console.log(count);
    let newupdate=[...update];
    newupdate=[update[0]+qty,update[1]+price]
    setupdate(newupdate)
   
  }
  const remove=(id,price,qty)=>{
    setc(count+1);
    let copy=[...card];
    let index=copy.findIndex(it=>it.id==id)
    console.log(index);
    if(index==0 && card[0].qty>=1){
      let nweproducts=copy[index]
      console.log(price);
      copy[index]={...nweproducts,qty:nweproducts.qty-1,price:(nweproducts.price)-price}
      console.log(copy)
      let newupdate=[...update];
      newupdate=[update[0]-qty,update[1]-price]
      setupdate(newupdate)
    
    }
    setcard(copy)
  }

  return (
    <div>
      <h4>Rs:{card[0]?.price ? card[0]?.price:itms.price}</h4>
      <Button onClick={()=>addtocard(itms.id,itms.price,1)}>AdTocard :{card[0]?.qty}</Button>
      <Button className='mx-1' onClick={()=>remove(itms.id,itms.price,1)}>Remove</Button>
    </div>
  )
}

import React, { useState } from 'react'
import {products} from "../data"
import {Container,Card, ButtonGroup} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './Buttons';

export default function Cardlist({update,setupdate}) {
    const [card,setcard]=useState([])
      const [count,setC]=useState(3)

  return (
    <div>
       <Container fluid className='d-flex flex-wrap gap-3 justify-content-center mt-3'>
        {products.map(itms=>{
          return (
        <Card style={{width:"18rem"}} className='border-3' >
          <Card.Body>
            <Card.Img src={itms.image}></Card.Img>
            <Card.Title>{itms.title}</Card.Title>
            <Card.Text>{itms.dis}</Card.Text>
            <Buttons itms={itms} update={update} setupdate={setupdate}/>
          </Card.Body>
        </Card>
           )
          })}
       </Container>
    </div>
  )
}

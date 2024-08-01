
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
export default function Header({update}) {
  const style={
    position:'sticky',
    top:"0px",
    zIndex:1
  }
  return (
    <>
    <div className='d-flex gap-4 bg-info align-items-center flex-wrap custon' style={style}>
        <h1 className='mx-3'>RcordsAddTocards</h1>
        <h3>Total Items ({update[0]})</h3>
        <h3>Total Rs:({update[1]})</h3>
    </div>
   </>
  )
}

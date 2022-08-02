import React from 'react'
import {useState} from 'react';
import './app.css'


function App() {
  const[data,setData]=useState({
    date:"",
    amount:""

  });


  const handleChange=(e)=>{
   const newData = {...data}
     newData[e.target.name]=e.target.value;
     setData(newData)
     console.log(newData)
  }
  
const handleSubmit=(e)=>{
     e.preventDefault()
  
   
}

  return (
   <div className='main-div'>
    <form>
      <div className='row'>
      <div className='col-md-2'>
      <p>Date <span className='text-danger'>*</span></p>
     </div>
     <div className='col-md-6'>
    <input type="number" class="form-control"  name='date' value={data.date} onChange={handleChange}/>
     </div>
      </div>

      <div className='row mt-2'>
      <div className='col-md-2'>
      <p>Amount <span className='text-danger'>*</span></p>
     </div>
     <div className='col-md-6'>
    <input type="number" class="form-control" name='amount' value={data.amount} onChange={handleChange} />
     </div>
      </div>

      <div className='row mt-2'>
      <div className='col-md-2'>
      <p>Payment Mode <span className='text-danger'>*</span></p>
     </div>
     <div className='col-md-6'>  
     <select id="payment Mode" className='form-control input'> 
  <option value="Cash" selected>Cash</option>
  <option value="Online">Online</option>
  <option value="Paytm">Paytm</option>
  <option value="PhonePay">PhonePay</option>
</select>
</div>
 

      </div>

      <div className='row mt-2'>
      <div className='col-md-2'>
      <p>Remark</p>
     </div>
     <div className='col-md-6'>
    <input type="email" class="form-control" id="exampleInputEmail1"/>
     </div>
      </div>
      <button type='submit' onClick={handleSubmit}>Send</button>
</form>
<div>
  <table>
    <tr>

    </tr>
  </table>
</div>
</div>



 
  )
}

export default App;

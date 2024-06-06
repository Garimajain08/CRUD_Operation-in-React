import React, { useState,useEffect } from 'react'

export default function Form({expenses}) {
  const [data,setdata]=expenses 
  const[expensedata,setexpense]=useState({
    title:"",
    category:"",
    amount:""
  })
  const [errors,seterrors]=useState({})
   function Validateform(formdata){
    const errordata={};
    console.log(formdata)
    if(formdata.title === ""){
      console.log("No title")
      errordata.title ="Title is required"
    }
    
    if(!formdata.category){  
      console.log("No category")
      errordata.category="Category is required"
    }
    if(formdata.amount === ""){
      console.log("No amt")
      errordata.amount="Amount is required"
    }   
  seterrors(errordata);
  // console.log("errordata",errordata);
  return errordata;
  }
  function handlesubmit(e){
    e.preventDefault();

 let obj = {
  "title":expensedata.title,
  "category":expensedata.category,
  'amount':expensedata.amount,
  "id":crypto.randomUUID()
};
 
 const err = Validateform(obj)
 console.log(err)
console.log(Object.keys(err).length)
if(Object.keys(err).length!=0){
 let c=(Object.keys(err))
 console.log("bhj",c)
 return;
}

setdata([...data,obj])
setexpense({
  title:"",
  category:"",
  amount:""

})

  }
  function Changehandle(e){
    seterrors({})
    const{name,value}=e.target;
    setexpense((prev)=>({...prev,[name]:e.target.value}))
  }
  return (
        <form className="expense-form" onSubmit={handlesubmit}>
          <div className="input-container">
            <label htmlFor="title" >Title</label>
            <input id="title" value={expensedata.title} onChange={Changehandle}  name="title" />
            <p className='error'>{errors.title} </p>
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={expensedata.category} onChange={Changehandle}>
                            <option value="" hidden>Select Category</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Bills">Bills</option>
                            <option value="Education">Education</option>
                            <option value="Medicine">Medicine</option>
                        </select>
                        <p className='error'>{errors.category} </p>
          </div>
          <div className="input-container">
            <label htmlFor="Amount">Amount</label>
            <input id="Amount" name="amount" value={expensedata.amount}  onChange={Changehandle}/>
            <p className='error'>{errors.amount} </p>
          </div>
          <button className="add-btn">Add</button>
        </form>
  
  )
}

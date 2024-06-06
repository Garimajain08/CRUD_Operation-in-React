import React, { useState,useEffect } from 'react'

export default function Form({expenses}) {
  const [data,setdata]=expenses 
  const[expensedata,setexpense]=useState({
    title:"",
    category:"",
    amount:""
  })

  const [errors,seterrors]=useState({
    title_error:"",
    category_error:"",
    amount_error:""
  })


  function Validateform(formdata){
    console.log(formdata.title,formdata.category,formdata.amount);
    if(formdata.title===""){
      console.log(formdata.title)
      seterrors(prev=>({...prev,title_error:"Set proper title"}));
    }
    if(!formdata.category){  
      seterrors(prev=>({...prev,category_error:"Set proper categorye"}));
    }
    if(formdata.amount === ""){
      seterrors(prev=>({...prev,amount_error:"Set proper amount"}));
    }
    
  }
  function handlesubmit(e){
    e.preventDefault();
  //   const formdata = new FormData(e.target)
  //   let obj ={}
  //   for (let [key, value] of formdata.entries()) {
  //     obj[key]= value;
  //   }
  //  obj['id']=crypto.randomUUID();
  //  setdata([...data,obj]);
  //  e.target.reset();

 let obj = {
  "title":expensedata.title,
  "category":expensedata.category,
  'amount':expensedata.amount,
  "id":crypto.randomUUID()
};
 
 Validateform(obj)

seterrors({
  title_error:"",
  category_error:"",
  amount_error:""

})

setdata([...data,obj])
setexpense({
  title:"",
  category:"",
  amount:""

})

  }
  function Changehandle(e){
    
    const{name,value}=e.target;
    setexpense((prev)=>({...prev,[name]:e.target.value}))
  }
  // function Titlehandle(e){
  //   setexpense((prev)=>({...prev,"title":e.target.value}));
    
  // }
  // function Categoryhandle(e){
  // setexpense((prev)=>({...prev,"category":e.target.value}))
    
  // }
  // function Amounthandle(e){
  //  setexpense((prev)=>({prev,"amount":e.target.value}))
    
  // }

  return (
   
        <form className="expense-form" onSubmit={handlesubmit}>
          <div className="input-container">
            <label htmlFor="title" >Title</label>
            <input id="title" value={expensedata.title} onChange={Changehandle}  name="title" />
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
          </div>
          <div className="input-container">
            <label htmlFor="Amount">Amount</label>
            <input id="Amount" name="amount" value={expensedata.amount}  onChange={Changehandle}/>
          </div>
          <button className="add-btn">Add</button>
        </form>
  
  )
}

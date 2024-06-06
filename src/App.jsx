import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Table from './Components/Table'
import expenses from './Components/Data'

function App() {
  const [data,setdata]=useState(expenses);

  return (
    <>
   <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
      <Form expenses={[data,setdata]}/>
       <Table expenses={[data,setdata]} />
        {/* <div className="context-menu">
            <div>Edit</div>
            <div>Delete</div>
        </div> */}
      </div>
    </main>
    
      
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(true)
  const [day, setday] = useState('')
  const [month, setmonth] = useState('')
  const [year, setyear] = useState('')
  const [day2, setday2] = useState('')
  const [month2, setmonth2] = useState('')
  const [year2, setyear2] = useState('')

  

  const handelcalculate=()=>{
    const dat = new Date();
    const years = dat.getFullYear()
    const months= dat.getMonth()+1
    const days= dat.getDate();   
    if(year && day && month){
      if(months>month){
        if(days>day){
          setmonth2(months-month)
          setyear2(years-year)
          setday2(days-day)
        }else{
          setmonth2(months-month-1)
          setyear2(years-year)
          setday2(30-(day-days))
        }
      }else{
        if(days>day){
          setday2(days-day)
          setmonth2(12-(month-months))
          setyear2(years-year-1)
        }else{
          setday2(30-(day-days))
          setmonth2(11-(month-months))
          setyear2((years-year)-1)
        }
      }
    }
    setyear('')
    setday('')
    setmonth('')
    setCount(false)
        
  }
  const click=()=>{
    setCount(true)
  }

  return (
    <>
    {
      count ? ( <h1>Age Will Appear Here !</h1>  ):(<h1>{year2}  years, {month2}  months, {day2}  days</h1>)
    }
      <div >
      <h3>Enter Your Date Of Birth</h3>
        <input onClick={click} type="text" onChange={(e)=>setday(e.target.value)}  placeholder='Day' value={day} />
        <input onClick={click} type="text" onChange={(e)=>setmonth(e.target.value)} placeholder='Month' value={month} />
        <input onClick={click} type="text" onChange={(e)=>setyear(e.target.value)} placeholder='Year' value={year} />
        <button onClick={handelcalculate}>Calculate</button>
      </div>
      <h1>Age Calculator</h1>
    </>
  )
}

export default App

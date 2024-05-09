import React, { useState } from 'react'
import Jobs from './components/Jobs'
interface Job{
  name: string,
  id:number,
  status:boolean
}
interface Props{
  job:Job
}
let obj = {
  name:"Minh",
  id:1,
  status:false
}

export default function App() {
 
  const [name,setName]= useState<string>()
  const [jobs,setJobs] = useState<any>("")
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    let obj = 
      {
        name:name,
        id:Math.floor(Math.random()*999999999999),
        status:false
      }
      setJobs(obj);
    }
    console.log("BOB",jobs );

  return (
    <div className='main'>
      <h2>Danh sách công việc </h2>
     <div> <input 
      onChange={handleChange}
      type="text" />
      <button onClick={handleClick}>Thêm</button>
      <Jobs job={jobs}></Jobs></div>
      <p>Danh sách việc đã hoàn thành</p>
    </div>
  )
}

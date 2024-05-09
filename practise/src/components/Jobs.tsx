import React, { useState } from "react";
import Job from './Job'

interface Job {
  name: string;
  id: number;
  status: boolean;
}
interface Props {
    job:Job
  }

let data:any = localStorage.getItem('jobs') || "[]"
if(data){
  data = JSON.parse(data)
}else{
  data = []
}
console.log("data",data);


export default function Jobs(props: Props) {

  const [jobs, setJobs] = useState<Job[]>(data);
  const {job} = props;
    
  return (
  <div>
    <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Trạng Thái</th>
            </tr>
        </thead>
        <tbody>
            {jobs.map((item, index)=>{
                return <Job job={item} stt = {index}></Job>
            })}
        </tbody>
    </table>
  </div>
  )
}

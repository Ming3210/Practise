import React from 'react'
interface Props{
  name:string,
  id:number,
  status:boolean,
}
interface Job{
  job:Props, 
  stt:number,

}


export default function Job(props:Job) {
    
  console.log("123",props);
  const {job} = props;
  const {stt} = props;
  return (
          <tr>
            <td>{stt}</td>
            <td>{job.name}</td>
            <td>{job.status?"Hoàn thành":"Chưa hoàn thành"}</td>
          </tr>
  )
}

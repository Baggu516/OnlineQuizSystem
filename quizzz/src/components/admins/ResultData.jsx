import React, { useState,useEffect } from 'react'
import "./ResultData.css"
const ResultData = ({totalinfo,index}) => {
  const [fetcheddata,setFecteddata]=useState([])
  useEffect(()=>{
    if(index==0){
     let t= totalinfo&&totalinfo.filter((item)=>item.title=="React Quiz")
     setFecteddata(t)
    }
    else{
      let t= totalinfo&&totalinfo.filter((item)=>item.title=="Instruction Quiz")
      setFecteddata(t)
    }
    
  },[index])
  console.log(fetcheddata,"fetcheddata")
  return (
    <div>
      <table>
        <tr>
          <th>Username</th>
          <th>{`Total Marks(out off ${totalinfo[0]?.totalmarks})`}</th>
          <th>operations</th>
        </tr>
      {fetcheddata&&fetcheddata.map((item,i)=>{
        return(
          <>
          {item.username&&<tr>
            <td>
            {item.username}
            </td>
            <td>
             90
            </td>
            <td className='operation-btns'>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>}
         
          </>
          
        )
      })}
      </table>
    </div>
  )
}

export default ResultData
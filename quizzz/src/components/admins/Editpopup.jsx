import React,{useContext, useState} from 'react'
import "./Edit.css"
import axios from 'axios';
import { Button, Divider } from '@mui/material';
import AuthContext from '../../context/AuthContext';
const Editpopup = ({onClose,fetcheddata,refIndex, setTotalInfo}) => {
    let {user}=useContext(AuthContext)
    const [u,setU]=useState(fetcheddata[refIndex].username)
    const [o,setO]=useState(fetcheddata[refIndex].obtainedmarks)
// ...send data to backend for updation
const HandleEdit=async()=>{
    try {
        let t=await axios.put("http://localhost:5000/result/update",{...fetcheddata[refIndex],username:u,obtainedmarks:o}, {
            headers: {
                'authorization': `Bearer ${user}`
            }
            
        }) 
        console.log(t.data)
        setTotalInfo(t.data)
    } catch (error) {
        console.log("front err during updation")
    }
    onClose()
    
}


  return (
    <div className='editcomponent'>
        <div className='head'>
        <h1>Details</h1>
        <button onClick={onClose}>X</button>
        </div>
        {/* <Divider/> */}
        <form >
            <div>
            <label htmlFor='id'>Username</label>
            <input type="text" value={u} onChange={(e)=>setU(e.target.value)} className='inpt1' />
            </div>
          <div>
          <label htmlFor='id'>Obtained Marks</label>
            <input type="text" value={o} onChange={(e)=>setO(e.target.value)} className='inpt2'/><br/>
          </div>
          
        </form>
        <div className='edit-actions'>
        <Button variant="contained" color='warning' onClick={onClose}>cancel</Button>
        <Button variant="contained" onClick={HandleEdit}>submit</Button>
        </div>
      
    </div>
  )
}

export default Editpopup
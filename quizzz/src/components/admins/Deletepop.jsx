import React,{useContext} from 'react'
import "./Edit.css";
import "./Delete.css";
import axios from "axios";
import { Button, Divider } from '@mui/material';
import AuthContext from '../../context/AuthContext';
const Deletepop = ({onClose,fetcheddata,refIndex,  setTotalInfo}) => {
    let {user}=useContext(AuthContext)
    console.log(user,"userrrrrrrrrr")
    const HandleDelete=async()=>{
        try {
            let t=await axios.delete("http://localhost:5000/result/delete",{data:fetcheddata[refIndex],
                headers: {
                    'authorization': `Bearer ${user}`
                }
            })
            console.log(t.data,"fghjkljhgfddfghj")
            setTotalInfo([...t.data])
        } catch (error) {
            
        }
        
      onClose()
    }
  return (
    <div className='delete-modal'>
        <div className='content'>
            <p>Are you sure want to delete <b>{fetcheddata[refIndex].username}</b>?</p>
        </div>
        <div className='edit-actions'>
        <Button variant="contained" color='warning' onClick={onClose}>No</Button>
        <Button variant="contained" onClick={HandleDelete}>Yes</Button>
        </div>
    </div>
  )
}

export default Deletepop
import React, { useEffect,useState } from "react";
import "./results.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import ResultData from "./ResultData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Results = () => {
  let navigate=useNavigate()
  const {setUser,user}=useContext(AuthContext)
        const [totalinfo,setTotalInfo]=useState([])
        const [filteredData,setFilteredData]=useState()
        const [index,setIndex]=useState(0)
    const Handlefetch=async()=>{
      try {
       
      let t= await axios.get("http://localhost:5000/result/gettotaldata", {
        headers: {
            'authorization': `Bearer ${user}`
        }
        
    })
    setTotalInfo(t.data);
    console.log("Total iNfo",t.data)
  } 
  catch (error) {
    console.log("front errr in result component")
  }
    
    }
    useEffect(()=>{
       Handlefetch()
       if(user){
        navigate("/resultspage")
       }

    },[])
  return (
    <>
    <div className="results-container">
    <div className="results-navbar">
        <button className="result-btn" onClick={()=>setIndex(0)}>React Quiz Results</button>
        <hr  style={{width:"1rem"}}/>
        <button className="result-btn" onClick={()=>setIndex(1)}>Instruction Quiz Results</button>

      </div> 
      <div className="logout-div">
        <h3>Logout</h3>
      <button className="logout-btn"><button onClick={()=>{
            localStorage.removeItem("token")
            setUser(null)}}><ion-icon name="log-out-outline"  size="small"></ion-icon></button></button>
      </div>
      
    </div>
    <ResultData totalinfo={totalinfo} index={index} setTotalInfo={setTotalInfo}/>
    
    </>
  );
};

export default Results;

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
        const [active,setActive]=useState(0)
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
    console.log("tttttttttttttttttttttt",t.data)
    // let f_data=Array.from(new Set(...t.data))
    // console.log("f_data",f_data)
    // let f=[]
    // const checking=(obj)=>{
    //   for(let i=0;i<f.length;i++){
    //     console.log("inside func",f[i],obj["title"]==f[i]["title"] , obj["username"]==f["username"])
    //     if(obj["title"]==f[i]["title"] && obj["username"]==f["username"]){
    //       return false
      //   }
      // }
      // return true
    // }
    // t.data.forEach((item)=>{
    //   if(f.length==0){
    //     f.push(item)
    //   }
    //   else{
    //     // console.log("forEcah item",item)
    //     if(checking(item)){
    //       f.push(item)
    //     }
    //   }
    // })
    // console.log("ffffffffffffffffffffffffsdcvffcxfcf",f)
    // console.log(f_data,"f_datta")
    // let f=Array.from(new Set(...f_data))
    // ////////////json...............
    // let d=[]
// let m=f_data.map(item=>JSON.stringify(item))
// m.forEach((item)=>{
//     if(!d.includes(item)){
//       d.push(item)  
//     }
// })
// let r=d.map(item=>JSON.parse(item))
// console.log()
    // .................................
    function eliminateDuplicates(arr) {
      return arr.filter((obj, index, self) =>
        index === self.findIndex((el) => el.username === obj.username && el.title === obj.title)
      );
    }
    
    var uniqueList = eliminateDuplicates(t.data);
    setTotalInfo(uniqueList);
    // console.log("Total iNfo",t.data)
  } 
  catch (error) {
    console.log("front errr in result component",error)
  }
    
    }
    useEffect(()=>{
       Handlefetch()
      //  if(user){
      //   navigate("/resultspage")
      //  }

    },[])
  return (
    <>
    <div className="results-container">
    <div className="results-navbar">
        <button className={`result-btn ${active==0?"act":""}`} onClick={()=>{
          setActive(0)
          setIndex(0)}}>React Quiz Results</button>
        <hr  style={{width:"1rem"}}/>
        <button className={`result-btn ${active==1?"act":""}`} onClick={()=>{
          setActive(1)
          setIndex(1)}}>Instruction Quiz Results</button>

      </div> 
      <div className="logout-div">
        <h3>Logout</h3>
      <button className="logout-btn" onClick={()=>{
            localStorage.removeItem("token")
            setUser(null)}}><ion-icon name="log-out-outline"  size="small"></ion-icon></button>
      </div>
      
    </div>
    <ResultData totalinfo={totalinfo} index={index} setTotalInfo={setTotalInfo} Handlefetch={Handlefetch}/>
    
    </>
  );
};

export default Results;

import React, { useEffect, useState } from "react";
import Instructions from "./Instructions";
import Timer from "./Timer";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";

import "./Quiz.css";
// material ui
// import Divider
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
// importing question component
import Questions from "./Questions";
// importing Data
import Data from "../Static-Data/Data";
import { convertLength } from "@mui/material/styles/cssUtils";
import PracticeModal2 from "./PracticeModal2";
const arr=[false,false,false]
Modal.setAppElement('#root');
// context api

const Quiz = () => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [mod, setMod] = useState(false)
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
  const HandleMod=()=>setMod(!mod)
  // changing question number state(n)
  const [n, setN] = useState(0);
  const [option,setOption]=useState(" ")
  // options functions to set options
// ......................
// setdisvalue for disablaing options
  // options disableing
  const [optionDisableArr, setOptionDisableArr] = useState([]);
const [disvalue,setDisvalue]=useState()
// ................................
// option storing array
const [optionStore1,setOptionStore1]=useState([])
const [optionStore,setOptionStore]=useState({
  "A":[],
  "B":[],
  "C":[]
})
// ................................
  const option1 = () => {
    console.log("option1");
    setOption("a")
    setDisvalue(0)
    // setOptionDisableArr([true, false, false]);
  };
  const option2 = () => {
    console.log("option2");
    setOption("b")
    setDisvalue(1)
    // setOptionDisableArr([false, true, false]);
  };
  const option3 = () => {
    console.log("option3");
    setOption("c")
    setDisvalue(2)
    // setOptionDisableArr([false, false, true]);
  };

  // handling section functions to render particular section questions
  const [s, setS] = useState("A"); //s=section
  const [secdisable, setSecDisable] = useState([true, false, false]);

  const [goNextText, setGoNextText] = useState("Go To Next section");
  const handleSecA = () => {
    setS("A");
    setN(0);
    setSecDisable([true, false, false]);
    setGoNextText("Go To Next section");
    if(optionStore.A[0]){
      let tem;
      switch(optionStore.A[0]){
        case "a":
          tem = 0;
          break;
        case "b":
          tem = 1;
          break;
        case "c":
          tem = 2;
          break;
        default:
          tem=""
          console.log("defaulttttttttttttttttttttttttttttttttttttt");
       }
  setDisvalue(tem)
  setOption(optionStore.A[0])
  }else{
    setDisvalue("")
    setOption(" ")
  }
  };
  const handleSecB = () => {
    setS("B");
    setN(0);
    setSecDisable([false, true, false]);
    setGoNextText("Go To Next section");
    if(optionStore.B[0]){
        let tem;
        switch(optionStore.B[0]){
          case "a":
            tem = 0;
            break;
          case "b":
            tem = 1;
            break;
          case "c":
            tem = 2;
            break;
          default:
            tem=""
            console.log("defaulttttttttttttttttttttttttttttttttttttt");
         }
    setDisvalue(tem)
    setOption(optionStore.B[0])
    }else{
      setDisvalue("")
      setOption(" ")
    }
  };
  const handleSecC = () => {
    setS("C");
    setN(0);
    setSecDisable([false, false, true]);
    setGoNextText("Go to Back-Section or Submit");
    if(optionStore.C[0]){
      let tem;
      switch(optionStore.C[0]){
        case "a":
          tem = 0;
          break;
        case "b":
          tem = 1;
          break;
        case "c":
          tem = 2;
          break;
        default:
          tem=""
          console.log("defaulttttttttttttttttttttttttttttttttttttt");
       }
  setDisvalue(tem)
  setOption(optionStore.C[0])
  }else{
    setDisvalue("")
    setOption(" ")
  }
  };

  // going to next section whenever we are end of the section

  const goingNextSection = () => {
    let t=[...optionStore[s]]
    // t.splice(n,1,option)
    t[n]=option
    setOptionStore({...optionStore,[s]:[...t]})
    // setOptionStore({...optionStore,[s]:[...optionStore[s],option]})
    setDisvalue("")
    if (s == "A") {
      setS("B");
      setN(0);
      setSecDisable([false, true, false]);
    } else if (s == "B") {
      setS("C");
      setN(0);
      setSecDisable([false, false, true]);
      setGoNextText("Go to Back-Section or Submit");
    } else {

    }
  };
  // save and next button function
  const HandleNext = () => {
    setN(n + 1);
    
    // setOptionDisableArr([false, false, false]);
    // if(optionStore[s][n]==undefined){
      let t=[...optionStore[s]]
      // t.splice(n,1,option)
      t[n]=option
      setOptionStore({...optionStore,[s]:[...t]})
      setDisvalue("")
      setOption(" ")
    // }
    // else{
      // let t=[...optionStore[s]]
      // t.splice(n,1,option)
      // // setOptionStore()
      // console.log(t,"tttttttttttttttttttttttttttttttttttt9090909")
      // setOptionStore({...optionStore,[s]:[...t]})
      if(optionStore[s][n+1]){
        console.log(optionStore[s][n+1],"backkkkkkkkkkkkkkfrontttttt")
        let tem;
        switch(optionStore[s][n+1]){
          case "a":
            tem = 0;
            break;
          case "b":
            tem = 1;
            break;
          case "c":
            tem = 2;
            break;
          default:
            tem=""
            console.log("defaulttttttttttttttttttttttttttttttttttttt");
         }
    setDisvalue(tem)
    setOption(optionStore[s][n+1])
      }
      else{
        setDisvalue("")
      }
    // }







  };
  // console.log(optionStore1,"storeeeeeeeeeeeeeeeeeeeeeeeee")
  // backfunction.............
  const HandleBack=()=>{
      setN(n-1)
      let temp;
      switch(optionStore[s][n-1]){
                  case "a":
                    temp = 0;
                    break;
                  case "b":
                    temp = 1;
                    break;
                  case "c":
                    temp = 2;
                    break;
                  default:
                    temp=""
                    console.log("defaulttttttttttttttttttttttttttttttttttttt");
    }
    setDisvalue(temp)
    setOption(optionStore[s][n - 1]);
      }
  console.log(optionStore,"allllseeeections")
  // handle clear func is used to clear the selected option
  const HandleClear=()=>{
      if(optionStore[s][n]){
        setDisvalue("")
        setOption(" ")
        let temp=[...optionStore[s]]
        temp.splice(n,1," ")
        setOptionStore({...optionStore,[s]:[...temp]})
      }
  }
  // mark up state
  const [markStore,setMarkStore]=useState({
    "A":[],
  "B":[],
  "C":[]
  })
  const HandleMark=()=>{
    let t=[...markStore[s]]
    t[n]==1?t[n]=0:t[n]=1
    console.log({...markStore,[s]:[...t]},"markuppppppppppppppppppppppppppppppppp")
    setMarkStore({...markStore,[s]:[...t]})
   //   if(optionStore[s][n])

  }
  // handle increment button 
  const HandleNButtons=(index)=>{
    setN(index)
    if(optionStore[s][index]){
      let temp;
      switch(optionStore[s][index]){
                  case "a":
                    temp = 0;
                    break;
                  case "b":
                    temp = 1;
                    break;
                  case "c":
                    temp = 2;
                    break;
                  default:
                    // text=2
                    console.log("defaulttttttttttttttttttttttttttttttttttttt");
    }
    setDisvalue(temp)
    setOption(optionStore[s][index]);
    }
    else{
      setDisvalue("")
      setOption(" ")
    }
  }
  // storing time from time component for enablaning ssubmit button
  const [timestore1,setTimestore1]=useState({
    m1:"",
    s1:"",
    h1:""
  })
  const [timetoggle,setTimetoggle]=useState(true)
  const HandleTime=(m1,s1,h1)=>{
    setTimestore1({...timestore1,m1:m1,s1:s1,h1:h1})
    console.log({...timestore1,m1:m1,s1:s1,h1:h1},"timooooooooo like worthhhhooo");
    (m1<=3)? setTimetoggle(false) :setTimetoggle(true)
  }

  useEffect(() => {
    console.log(n, "useEffecttttttttttttttttt");
    if(disvalue>-1){
      console.log(n, "useEffecttttttttttttttttt");
      const updatedoptionDisableArr=[...arr]
      updatedoptionDisableArr[disvalue]=!updatedoptionDisableArr[disvalue]
      setOptionDisableArr([...updatedoptionDisableArr])

    }
  }, [disvalue]);

  return (
    <>
      <div className="quiz">
        <div className="quiz-heading">
          This is quizz page where actuall quiz {id} goes!!
        </div>

        <div className="sections-container">
          <Button
            variant="contained"
            className="section-btn"
            onClick={handleSecA}
            disabled={secdisable[0]}
          >
            section-A
          </Button>
          <Button
            variant="contained"
            className="section-btn"
            onClick={handleSecB}
            disabled={secdisable[1]}
          >
            section-B
          </Button>
          <Button
            variant="contained"
            className="section-btn"
            onClick={handleSecC}
            disabled={secdisable[2]}
          >
            section-c
          </Button>
          <Divider />
        </div>

        <div className="time-instruction">
          <Button
            variant="contained"
            color="warning"
            className="Instruction-btn"
            onClick={openModal}
          >
            view Instructions
          </Button>

          <Timer HandleTime={HandleTime}/>
        </div>
        {/* ************************************************************questions********************************************/}
        <div className="question-container">
          <Questions
            n={n}
            option1={option1}
            option2={option2}
            option3={option3}
            s={s}
            optionDisableArr={optionDisableArr}
          />
        </div>
        {/* *******************************************************************************************8 */}
        <div className="question-numbers">
          <button className="section-heading-btn">section-{s}</button>
          <Divider />
          <div className="numbers">
            {Data[`section${s}`].map((item, index) => (
            (optionStore[s][index]==undefined || optionStore[s][index]==" ")?
           (markStore[s][index]==1?<button
                className="number-btn2"
                key={index}
                onClick={() => HandleNButtons(index)}
              >
                {index + 1}
              </button>:  <button
                className="number-btn"
                key={index}
                onClick={() => HandleNButtons(index)}
              >
                {index + 1}
              </button> 
              ):
              ((markStore[s][index]==1)?
              <button
              className="number-btn2"
              key={index}
              onClick={()=>HandleNButtons(index)}
            >
              {index + 1}
            </button>:
              <button
              className="number-btn1"
              key={index}
              onClick={()=>HandleNButtons(index)}
            >
              {index + 1}
            </button>
              )
            

            ))}
          </div>
        </div>
        {/* <hr></hr> */}
        <div className="nav-btn">
          <div className="clear-mark-btn">
            <Button variant="contained" onClick={HandleClear}>Clear</Button>
            <Button variant="contained" onClick={HandleMark}>Mark up</Button>
          </div>
          <div className="save-next-btn">
            {Data[`section${s}`].length - 1 !== n ? (
              <>
              {n>0&&<Button variant="contained" color="primary" onClick={HandleBack}>
                Back
              </Button>}
                 <Button variant="contained" color="primary" onClick={HandleNext}>
                Save and next
              </Button>
              </>
           
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={goingNextSection}
              >
                {goNextText}
              </Button>
            )}
          </div>
        </div>
        <div className="submit-btn">
          <Button variant="contained" 
           disabled={timetoggle}
           onClick={HandleMod}
           >
            {/* <Link to="/modal2">Submit</Link> */}
            submit
          </Button>
        </div>

        <Modal isOpen={modalOpen}>
          <Instructions closeModal={closeModal} isModal={false} />
        </Modal>
        <Modal
           ariaHideApp={true}

           isOpen={mod}>
           <PracticeModal2 passingdata={optionStore} HandleMod={HandleMod}/>
           {/* <h1>hello</h1> */}
           {/* <Instructions closeModal={closeModal} isModal={false} /> */}
        </Modal> 
        {/* <Timer /> */}
      </div>
    </>
  );
};

export default Quiz;

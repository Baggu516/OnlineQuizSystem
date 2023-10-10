import React, { useState } from 'react'
import "./Questions.css"
import Data from '../Static-Data/Data'
import { Button } from '@mui/material';
const arr = [false, false, false];
const Questions = ({n,option1,option2,option3}) => {
   const [secA,setSecA]=useState([...Data.sectionA])
//    console.log(secA,"secAAAAAAAAAAAAAAAAAAa",SecA[0])
    const [dis, setDis] = useState([...arr]);
  return (
    <div>
      <div className="questions-container">
      <h2 className='qustion'>{`${n + 1}.) ${Data.sectionB[n].Q}`}</h2>
        <div className="options-container">
          
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            // color='secondary'
            // style={{backgroundColor:}}
            onClick={option1}
            disabled={dis[0]}
          >
            {`A.) ${Data.sectionA[n].a}`}
          </Button>
          <Button
            style={{ margin: "10px" }}
            // variant="outline-primary"
            variant="contained"
            // type="button" class="btn btn-outline-warning"
            onClick={option2}
            disabled={dis[1]}
          >
            {`B.) ${Data.sectionA[n].b}`}
          </Button>
          <Button
            style={{ margin: "10px" }}
            // variant="primary"
            variant="contained"
            onClick={option3}
            disabled={dis[2]}
          >
            {`C.) ${Data.sectionA[n].c}`}
          </Button>
        </div>
        {/* {n !== Data.length - 1 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            {n > 0 && <Button onClick={handleBack}>Back</Button>}
            <Button onClick={evaluate} disabled={save}>
              Save & Next
            </Button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={finish} disabled={save}>
              SUBMIT
            </Button>{" "}
          </div>
        )} */}
      </div>
    </div>
  )
}

export default Questions

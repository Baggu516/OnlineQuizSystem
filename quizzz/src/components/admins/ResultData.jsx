import React, { useState, useEffect } from "react";
import "./ResultData.css";
import Editpopup from "./Editpopup";
import Deletepop from "./Deletepop";
import Modal from "react-modal";
Modal.setAppElement("#root");
const ResultData = ({ totalinfo, index, setTotalInfo }) => {
  const [fetcheddata, setFecteddata] = useState([]);
  const [edit, setEdit] = useState(false);
  const [close, setClose] = useState(false);
  const [refIndex, setRefIndex] = useState(0);
  // .........modal style.
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "26rem",
      height: "18rem",
    },
    overlay: {
      backgroundColor: "grey",
    },
  };
  // .......................
  useEffect(() => {
    console.log("useeffect");
    if (index == 0) {
      let t =
        totalinfo && totalinfo.filter((item) => item.title == "React Quiz");
      setFecteddata(t);
    } else {
      let t =
        totalinfo &&
        totalinfo.filter((item) => item.title == "Instruction Quiz");
      setFecteddata(t);
    }
  }, [totalinfo, index]);
  console.log(fetcheddata, "fetcheddata", totalinfo);
  return (
    <div>
      <table>
        <tr>
          <th>Username</th>
          <th>{`Total Marks(out off ${totalinfo[0]?.totalmarks})`}</th>
          <th>operations</th>
        </tr>
        {fetcheddata.length!=0?
           fetcheddata.map((item, i) => {
          return (
            <>
              <tr>
                <td>{item.username}</td>
                <td>{item.obtainedmarks}</td>
                <td className="operation-btns">
                  <button
                    onClick={() => {
                      setEdit(true);
                      setRefIndex(i);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setRefIndex(i);
                      setClose(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          );
        }):<><p>No results yet</p></>}
      </table>
      <Modal
        isOpen={edit}
        onRequestClose={() => setEdit(false)}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
      >
        <Editpopup
          onClose={() => setEdit(false)}
          fetcheddata={fetcheddata}
          refIndex={refIndex}
          setTotalInfo={setTotalInfo}
        />
      </Modal>
      <Modal
        isOpen={close}
        onRequestClose={() => setClose(false)}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
      >
        <Deletepop
          onClose={() => setClose(false)}
          fetcheddata={fetcheddata}
          refIndex={refIndex}
          setTotalInfo={setTotalInfo}
        />
      </Modal>
    </div>
  );
};

export default ResultData;

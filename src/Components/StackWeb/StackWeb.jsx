import React from "react";
import { useParams } from "react-router-dom";
import "./StackWeb.css";

const StackWeb = () => {
  const params = useParams();
  console.log(params.stackid);

  const handleAITourBangalore = ()=>{
    window.open(process.env.REACT_APP_MAITOUR_BLR, "_blank");
  }

  const handleAITourDelhi = ()=>{
    window.open(process.env.REACT_APP_MAITOUR_DELHI, "_blank");
  }

  if (params.stackid === "maitour") {
    return (
      <div className="stackparent">
        <div className="stackcontainer">
          <div className="stackpreheader">
            <img
              src={process.env.REACT_APP_PROFILE_URL}
              className="stackprofile"
            ></img>
            {/* <text className="preheadertext"> Harshith Presents</text> */}
            <a
              href={process.env.REACT_APP_SOCIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="preheadertext"
            >
              Harshith Presents
            </a>
          </div>

          <div className="stackheader">
            <div className="stackmainHeading">Hey, Thanks for Dropping by!</div>
            <div className="stackmainHeading">Event Name : Microsoft AI Tour</div>

            <a
              href={process.env.REACT_APP_SOCIAL_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsappCommunity"
            >
              Click here to join our WhatsApp Community 🚀
            </a>
          </div>

          <div className="stacksubmitContainer">
            <button className="stacksubmit" onClick={handleAITourBangalore}>
              Bengaluru : Microsoft AI Tour - Click to Register
            </button>
            <button className="stacksubmit" onClick={handleAITourDelhi}>
              Delhi : Microsoft AI Tour - Click to Register
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Hey, this is still under dev</div>;
  }
};

export default StackWeb;

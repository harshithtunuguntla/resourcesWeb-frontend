import React, { useState } from "react";
import "./PipelineWeb.css";
import successTick from "../Assets/successTick.json";
import Lottie from "lottie-react";

const PipelineWeb = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValidEmail = (email) => {
    // console.log("checking if email is valid");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log("email valid: ");
    console.log(emailRegex.test(email));
    return emailRegex.test(email);
  };

  const isValidMobile = (mobile) => {
    // console.log("checking if mobile is valid");
    const mobileRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    console.log("mobile valid: ");
    console.log(mobileRegex.test(mobile));
    return mobileRegex.test(mobile);
  };

  const validateForm = () => {
    console.log("validate form called");
    let newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required!";
    }
    if (!formData.email) {
      newErrors.email = "Email is required!";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Enter a valid email!";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Phone number is required!";
    } else if (!isValidMobile(formData.mobile)) {
      newErrors.mobile = "Enter a valid phone number!";
    }
    setErrors({ ...newErrors });
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFollow = (e) => {
    const socialUrl= process.env.REACT_APP_SOCIAL_URL;
    window.open(socialUrl, "_blank");
  };

  const downloadPDF = () => {
    const pdfUrl = process.env.REACT_APP_PDF_FILE_URL;

    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    } else {
      console.log("PDF URL is not defined in env variables");
    }
    // window.location.href = pdfUrl;
    // const link = document.createElement("a");
    // link.href = pdfUrl;
    // link.download = "tUyyKivwvcw7UyCWVqAcBP.pdf"
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const insertUserData = () => {
    fetch("https://resourcesweb-backend.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Error:", error));
  };

  const handleSubmit = (e) => {
    console.log("handle submit called");
    const isFormValid = validateForm();
    if (isFormValid) {
      console.log("Form is Valid");
      insertUserData();
      downloadPDF();
      setIsSubmitted(true);
    } else {
      console.log("form is not valid");
      console.log(errors);
    }
  };

  return (
    <div className="parent">
      <div className="container">
        {isSubmitted ? (
          <>
            <div className="submitSuccess">
              <div className="lottieAnimation">
                <Lottie animationData={successTick}></Lottie>
              </div>

              <div className="successMessage">
                Thankyou for accessing the document!
              </div>

              <button className="followSubmit" onClick={handleFollow}>
                Follow Harshith Presents for More!
            </button>

            </div>

            
          </>
        ) : (
          <>
            <div className="preheader">
              <img
                src={process.env.REACT_APP_PROFILE_URL}
                className="profile"
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

            <div className="header">
              <div className="mainHeading">
                Hey, Thanks for Dropping by! 
              </div>
              <div className="mainHeading">
                Access the <span className="highlight">Job Search Document</span> Here!
              </div>
              
              {/* <text>Resource By Harshith Presents</text> */}
              <text>
                Please enter the following details to access the document for
                free!
              </text>
              {/* <text>ahjsdfkjhs aiksjhdf jksdh fkahjksdfh </text> */}
            </div>

            <div className="inputs">
              <div className="input">
                <div className="heading">
                  Name
                  {/* <span style={{color:"red"}}>  *</span> */}
                </div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error-border" : ""}
                />
                <div className="error">{errors.name}</div>
              </div>
              <div className="input">
                <div className="heading">Email</div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error-border" : ""}
                />
                <div className="error">{errors.email}</div>
              </div>
              <div className="input">
                <div className="heading">Phone Number</div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength={10}
                  className={errors.mobile ? "error-border" : ""}
                />
                <div className="error">{errors.mobile}</div>
              </div>
            </div>

            <div className="submitContainer">
              <button className="submit" onClick={handleSubmit}>
                Access Document For Free
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PipelineWeb;

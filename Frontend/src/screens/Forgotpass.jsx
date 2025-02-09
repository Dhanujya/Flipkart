import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


const Forgotpass = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const navigate = useNavigate();

  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  const checkEmailExists = async () => {
    try {
      const response = await axios.post("http://localhost:5000/check-email", { email });
      if (response.status==200) {
        sendOtp();
      } else {
        alert("Email not found!");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const sendOtp = () => {
    const newOtp = generateOtp();
    setGeneratedOtp(newOtp);

    const templateParams = { reply_to: email, otp: newOtp };

    emailjs
      .send("service_q57p6eh", "template_ihfoghn", templateParams, "4c3DlevPsGWQlu_UR")
      .then(() => {
        alert("OTP sent successfully!");
        setEmailVerified(true);
      })
      .catch(() => alert("Failed to send OTP."));
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      alert("OTP verified successfully!");
      console.log(email);
      navigate("/updatepass",{state:{email}});
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-96">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Forgot Password</h2>
  
        {!emailVerified ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button
              onClick={checkEmailExists}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
  
};

export default Forgotpass;
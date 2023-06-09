import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Getotp.css";
const OTP_TIME = 60;
/*
const CountDown = () => {
    const [timeleft, settimeleft] = useState(60);
    useEffect(() => {
        const interval = setInterval(() => {
            settimeleft(timeleft-1);
            console.log(timeleft);
        }, 1000);
    
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <h3>{timeleft}</h3>
    )
};
*/
const GetOTP = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("abc@gmail.com");
    const [resTime, setresTime] = useState();
    const [otpstatus, setotpstatus] = useState(false);
    const [timeleft, settimeleft] = useState(OTP_TIME);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:5000/OTPmail",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email}),
            });
            // const data = await response.json();
            // console.log(data)
            // console.log(response);
            if(response.ok){
                // OTP SEND
                // console.log("OTP SEND");
                // const data = await response.json();
                // console.log(data)
                setotpstatus(true);
                setresTime(new Date());
                settimeleft(OTP_TIME);
                
            }
        }catch(error){
            console.log(error)
        }
    };

    const HandleOTP = async (otp) => {
        if(otp.length===6){
            // console.log("OK");
            const curtime = new Date();
            const left = OTP_TIME - Math.round((curtime-resTime) / 1000);
            // console.log(resTime)
            // console.log(left);
            // console.log(otp);
            if(left<0){
                alert("Time went out")
            }else{
                setotpstatus(false);
                try{
                   //  console.log("Verify OTP Sending");
                    const response = await fetch("http://localhost:5000/verifyOTP",{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({email, otpU : otp}),
                    })
                    // console.log(`Verify OTP response : ${response}`);
                    const data = await response.json();
                    // console.log(data);
                    if(response.ok){
                        const { userId } = data;
                        console.log(`UserID : ${userId}`)
                        localStorage.setItem("isSignedIn", true);
                        localStorage.setItem("userId", userId);
                        navigate("/profile");
                    }
                }catch(error){
                    console.log(error);
                }
            }
        }
    }

    useEffect(() => {
        if(otpstatus){
            // console.log("IN EFFECT")
            const interval = setInterval(() => {
                settimeleft(Math.max(0, timeleft - 1));
                // console.log(timeleft)
            }, 1000);
            return () => {
                clearInterval(interval)
            }
        }
    }, [otpstatus, timeleft])

    return (
        <form className="getotp-box" onSubmit={HandleSubmit}>
            <input 
                type="text" 
                className="email-input" 
                onChange={(e)=>setemail(e.target.value)}
                defaultValue="abc@gmail.com"
                required
            />
            <input 
                type="text" 
                className="otp-input" 
                maxLength="6" 
                defaultValue="OTP" 
                onChange = {(e) => {
                    HandleOTP(e.target.value)
                }}
            />
            {timeleft}
            <button type="submit">Get OTP</button>
        </form>
    );
};

export default GetOTP;
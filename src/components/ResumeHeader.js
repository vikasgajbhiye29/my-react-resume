import React from 'react'
import profile from'./image/profile.jpg'
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";

function ResumeHeader() {
  return (
    <div style={{backgroundColor:"blueviolet"}}>
        <div className='row p-3 text-center' ><h1>RESUME</h1></div>
            <div className='container' style={{marginTop:"20px"}}>
                <div className="row p-5">
                    <div className="col-8 col-auto me-auto" >
                        <h2 style={{color:"black"}}>Vikas Suresh Gajbhiye</h2>
                        <h4>Software Engineer <strong style={{color:"black"}}><FaLaptopCode /></strong> </h4> 
                        
                        <p>A highly motivated and detail-oriented software engineer having 2+ years of experience in software development
                        and coding applications and ability to design and develop efficient and reliable innovative solutions.</p>
                    </div>
                    <div className="col col-auto ">
                        <img src={profile} alt='network error'style={{border:"2px solid blueviolet",borderRadius:"10%"}}/>
                    </div>
                </div> 
            </div>
            <div className='row d-flex p-2' style={{color:"black"}}>
                <div className='col text-center'><h6 ><MdOutlineEmail /> gajbhiye.vikas29@gmail.com</h6></div>
                <div className='col text-center' ><h6 ><MdOutlineWifiCalling3 /> 7709007992</h6></div>
                <div className='col text-center'><h6> <CiLocationOn /> Pune, Maharashtra,India</h6></div>
                <div className='col text-center'><h6><MdDateRange /> DOB : 29/11/1994</h6></div>    
            </div>
    </div>
  )
}
export default ResumeHeader

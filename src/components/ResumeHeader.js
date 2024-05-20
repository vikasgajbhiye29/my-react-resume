import React from 'react'
import profile from'./image/profile.jpg'
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";

function ResumeHeader() {
  return (
    <div className="container my-2" style={{backgroundColor:"darkgray", borderRadius:"15px", color:"black"}}>
        <div className='row' ><h1 className='text-center'>Resume</h1></div>
        <div className="row" style={{margin:"20px",backgroundColor:"gray", borderRadius:"15px", color:"black"}}>
            <div className="col-8 align-self-start" style={{ padding:"5rem"}}>
                <h2>Vikas Suresh Gajbhiye</h2>
                <h4>Software Engineer <strong><FaLaptopCode /></strong> </h4>
                <p>A highly motivated and detail-oriented software engineer having 2+ years of experience in software
                    development and coding applications and ability to design and develop efficient and reliable innovative
                    solutions.</p>
            </div>
            <div className="col-4" style={{padding:"5rem"}}>
                <img className='text-center' src={profile} alt='network error'style={{border:"1px solid black", width:"150px",height:"150px", borderRadius:"10%"}}/>
            </div>
            
        </div>
        <div className='row d-flex p-2'  style={{backgroundColor:"black", borderRadius:"4px", color:"gray",margin:"1px"}}>
            <div className='col mx-3'><strong style={{color:"red"}}><MdOutlineEmail /></strong> Email : gajbhiye.vikas29@gmail.com </div>
            <div className='col text-center' ><strong style={{color:"green"}}><MdOutlineWifiCalling3 /></strong> Mobile : 7709007992</div>
            <div className='col text-center'><strong style={{color:"lightblue"}}><CiLocationOn /></strong> Address : Pune, Maharashtra,India</div>
            <div className='col text-center'><strong style={{color:"darkgray"}}><MdDateRange /></strong> DOB : 29/11/1994</div>
            
        </div>
        <hr></hr>
    </div>
  )
}
export default ResumeHeader

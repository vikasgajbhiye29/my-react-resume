import React from 'react'
import { GrLinkedinOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineWifiCalling3 } from "react-icons/md";

function Footer() {
  return (
    <div style={{backgroundColor:"blueviolet"}}>
        <div className='container'>
            <div className='row align-items-center p-4'>
                <div className='col m-3'>
                <h4><strong style={{color:"gray"}}>Social</strong><span style={{color:"blue"}} > Links</span></h4>
                            
                                <div className='row'>
                                    <div className='col' style={{ marginTop:"10px"}}><a className=' p-3' style={{color:"red"}}  href='https://www.instagram.com/vikasgajbhiye29/' target='blank'> <GrInstagram /> </a></div>
                                    <div className='col' style={{ marginTop:"10px"}}><a className=' p-3' style={{color:"black"}} href='https://github.com/vikasgajbhiye29/my-react-resume' target='blank'><FaGithub /></a></div>
                                    <div className='col' style={{ marginTop:"10px"}}><a className=' p-3' style={{color:"blue"}} href='https://www.linkedin.com/in/vikas-gajbhiye-b8b5a1246/' target='blank'><GrLinkedinOption /></a></div>
                                    <div className='col' style={{ marginTop:"10px"}}><a className=' p-3' style={{color:"red"}} href='/' target='blank'> <GrYoutube /></a>  </div>
                                </div>   
                            
                
                </div>
                <div className='col m-3'></div>
                <div className='col m-3' >
                  
                   <h4 style={{color:"black"}}>Profile_Info</h4>
                            
                            <p> <strong style={{color:"black", marginLeft:"10px"}} > <CgProfile /></strong ><span style={{color:"wheat", marginLeft:"10px"}}> Vikas Gajbhiye</span></p>
                            <p> <strong style={{color:"black", marginLeft:"10px"}}> <MdOutlineEmail /> </strong><span style={{color:"wheat", marginLeft:"10px"}}> gajbhiye.vikas29@gmail.com</span></p>
                            <p> <strong style={{color:"black", marginLeft:"10px"}}> <MdOutlineWifiCalling3 /></strong><span style={{color:"wheat", marginLeft:"10px"}}> 7709008992</span></p>
                            <p> <strong style={{color:"black", marginLeft:"10px"}}> <SlLocationPin /></strong> <span style={{color:"wheat", marginLeft:"10px"}}> Pune Mahatrashtra India</span></p>

             
                   </div>
            </div>
            <div className='row text-center' >
                <div className='col '>
                    <small style={{color:"black"}}>© Copyright "vikasgajbhiye29" All Rights Reserved</small>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Footer
   
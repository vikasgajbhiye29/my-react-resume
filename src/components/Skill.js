
import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import IOT from './image/IOT.jpeg'
import AWS from './image/AWS.jpeg'



function Skill() {
  return (
    <div className='container' style={{color:"black"}} >
        <div className="row align-items-center">
            <div className="col text-center p-4" style={{backgroundColor:"lightgray", borderRadius:"15px", marginTop:"10px"}} >
                <a style={{color:"black", textDecoration:"none"}} className="conatiner" data-bs-toggle="modal" href="#exampleModalToggle"><h4>Skills</h4></a>
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                            <div className="modal-header" style={{backgroundColor:"goldenrod"}}>
                                <h3 className="modal-title" id="exampleModalToggleLabel">Skills</h3>
                                <h5 data-bs-dismiss="modal" aria-label="Close"><IoCloseCircleOutline /> </h5>
                            </div>
                            <div className="modal-body" style={{ backgroundColor:"black"}}>
                            <div className="d-inline-flex p-2 btn btn-outline-warning m-2">Core-Java, Advance-Java</div>
                            <div className="d-inline-flex p-2 btn btn-outline-warning m-2">HTML, CSS, BootStrap</div>
                            <div className="d-inline-flex p-2 btn btn-outline-warning m-2">MySQL, Hibernate</div>
                            <div className="d-inline-flex p-2 btn btn-outline-warning m-2">Git, GitHub</div>
                            <div className="d-inline-flex p-2 btn btn-outline-warning m-2">Spring-Data-JPA, RestAPI</div>
                            <div className="d-inline-flex p-2 btn btn-outline-warning m-2">JSP Servlet, JavaScript, ReactJS</div>
                            <div className="d-inline-flex p-2 btn btn-outline-warning m-2">Spring, SpringBoot</div>
                            <div className="d-inline-flex p-2 btn btn-outline-warning m-2">Spring-Security, JSON-Web-Token</div>
                            <div className="d-inline-flex p-2 btn btn-outline-warning m-2">Micro-services, AWS </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col text-center p-4" style={{backgroundColor:"lightgray", borderRadius:"15px", marginLeft:"10px", marginTop:"10px"}}>
            <a style={{color:"black", textDecoration:"none"}} className="conatiner" data-bs-toggle="modal" href="#exampleModalToggleLanguage" role="button"><h4>Language</h4></a>
                <div className="modal fade" id="exampleModalToggleLanguage" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header" style={{backgroundColor:"goldenrod"}}>
                                <h3 className="modal-title" id="exampleModalToggleLabel">Language</h3>
                                <h3 data-bs-dismiss="modal" aria-label="Close"><IoCloseCircleOutline /> </h3>
                            </div>
                            <div className="modal-body" style={{ backgroundColor:"black" ,color:"whitesmoke"}}>
                            <div className="d-inline-flex ">
                                        <h5>English</h5>
                                        <div className="form-check form-check-inline" style={{marginLeft:"20px"}}>
                                            <input className="form-check-input" type="checkbox"  id="flexRadioCheckedDisabled1" disabled /> 
                                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled1">Beginner</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox"  id="flexRadioCheckedDisabled2"  disabled /> 
                                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled2">Intermediate</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="flexRadioCheckedDisabled3" checked disabled/> 
                                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled3">Professional</label>
                                        </div>
                            </div>
                            <div className="d-inline-flex ">
                                        <h5>Hindi   </h5>
                                        <div className="form-check form-check-inline" style={{marginLeft:"20px"}}>
                                            <input className="form-check-input" type="checkbox"  id="flexRadioCheckedDisabled1" disabled /> 
                                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled1">Beginner</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox"  id="flexRadioCheckedDisabled2"  disabled /> 
                                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled2">Intermediate</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="flexRadioCheckedDisabled3" checked disabled/> 
                                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled3">Professional</label>
                                        </div>
                            </div> 
                            <div className="d-inline-flex ">
                                        <h5>Marathi</h5>
                                        <div className="form-check form-check-inline" style={{marginLeft:"20px"}}>
                                            <input className="form-check-input" type="checkbox"  id="flexRadioCheckedDisabled1" disabled /> 
                                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled1">Beginner</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox"  id="flexRadioCheckedDisabled2"  disabled /> 
                                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled2">Intermediate</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="flexRadioCheckedDisabled3" checked disabled/> 
                                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled3">Professional</label>
                                        </div>
                            </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col text-center p-4" style={{backgroundColor:"lightgray", borderRadius:"15px", marginLeft:"10px", marginTop:"10px"}}>
            <a style={{color:"black", textDecoration:"none"}} className="conatiner" data-bs-toggle="modal" href="#exampleModalToggleCertificate" role="button"><h4>Certificate</h4></a>
                <div className="modal fade" id="exampleModalToggleCertificate" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header" style={{backgroundColor:"goldenrod"}}>
                                <h3 className="modal-title" id="exampleModalToggleLabel">Certificate</h3>
                                <h3 data-bs-dismiss="modal" aria-label="Close"><IoCloseCircleOutline /> </h3>
                            </div>
                            <div className="modal-body" style={{ backgroundColor:"black" ,color:"whitesmoke",textAlign:"left"}}>
                                <div className='row' style={{}}>
                                    <div className='col'><h5>CCNA Certification </h5>
                                    <small style={{color:"blueviolet"}}data-bs-toggle="tooltip" data-bs-placement="bottom" title="Indo German Aurangabad"><strong style={{cursor:"pointer"}}>IGTR</strong> Aurangabad 09/2019 - 01/2020 </small>
                                    
                                    </div>
                                    <div className='col'>
                                        {/* <!-- Button trigger modal --> */}
                                        <div className='col text-end'><button style={{backgroundColor:"blueviolet", color:"white", marginTop:"8px"}} className="btn" data-bs-placement="bottom" title="Not Available" data-bs-toggle="modal" data-bs-target="#exampleModalCCNA">< HiOutlineViewfinderCircle /></button></div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='row'>
                                    <div className='col'>
                                    <h5>IOT Certification </h5>
                                    <small style={{color:"blueviolet"}}>IGTR Aurangabad</small>
                                    </div>
                                    <div className='col'>
                                        {/* <!-- Button trigger modal --> */}
                                        <div className='col text-end'><button style={{backgroundColor:"blueviolet", color:"white", marginTop:"8px"}} className="btn" data-bs-placement="bottom" title="IOT Certificate" data-bs-toggle="modal" data-bs-target="#exampleModalIOT">< HiOutlineViewfinderCircle /></button></div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className='row'>
                                    <div className='col'>
                                    <h5>AWS Certification </h5>
                                    <small style={{color:"blueviolet"}}>Udemy Certification on 20/02/2023</small>
                                    </div>
                                    <div className='col'>
                                        {/* <!-- Button trigger modal --> */}
                                        <div className='col text-end'><button style={{backgroundColor:"blueviolet", color:"white", marginTop:"8px"}} className="btn" data-bs-placement="bottom" title="AWS Certificate" data-bs-toggle="modal" data-bs-target="#exampleModalAWS">< HiOutlineViewfinderCircle /></button></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        
         {/* <!-- Modal for CCNA --> */}
        <div className="modal fade" id="exampleModalCCNA" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog"style={{color:"black"}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5  className="modal-title" id="exampleModalLabel">CCNA Certificate</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='container'>
                            <div className='row'>
                                <img src={IOT} alt='network error' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal for IOT --> */}
        <div className="modal fade" id="exampleModalIOT" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog"style={{color:"black"}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5  className="modal-title" id="exampleModalLabel">IOT Certificate</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='container'>
                            <div className='row'>
                                <img src={IOT} alt='network error' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
               {/* <!-- Modal for AWS --> */}
        <div className="modal fade" id="exampleModalAWS" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog"style={{color:"black"}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5  className="modal-title" id="exampleModalLabel">AWS Certificate</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className='container'>
                        <div className='row'>
                            <img src={AWS} alt='network error' />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Skill

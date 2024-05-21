import React from 'react'
import vb from'./image/vb.jpeg'
import deltaimg from './image/delta.png'
import { VscActivateBreakpoints } from "react-icons/vsc";

function WorkExperiance() {
  return (
    <div className='container my-3' style={{color:"black", backgroundColor:"gray", borderRadius:"10px", marginBottom:"3px"}}>
        <div className='row d-flex p-2'><h4 className='text-center'>Work Experiance</h4></div>
        <div className='row' >
            
            <div className="col-sm-6" >
                <div className="card " style={{maxWidth: "540px", margin:"40px", backgroundColor:"black" , color:"whitesmoke", borderRadius:"15px"}}>
                    <div className="row" >
                        <div className="col-md-4">
                            <img style={{paddingTop:"12%", paddingLeft:"30px"}} src={vb} className="img-fluid rounded-start" alt="network error"/>
                        </div>
                        <div className="col-md-8" style={{cursor:"pointer"}}>
                            <div className="card-header" data-bs-toggle="tooltip" data-bs-placement="bottom" title="VibrantMinds Technologies Pvt Ltd">
                                <h5>VMT</h5>
                            </div>
                            <div className="card-body" >
                                <h5 className="card-title">Software Engineer</h5>
                                <p className="card-text">07/2023 To Present</p>
                                <p className="card-text">PUNE</p>
                                <p className="card-text"><small className="text-muted">Project Domain - E-Com</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card mb-3" style={{maxWidth: "540px", margin:"40px", backgroundColor:"black" , color:"whitesmoke", borderRadius:"15px"}}>
                    <div className="row" >
                        <div className="col-md-4">
                            <img style={{paddingTop:"40%", paddingLeft:"30px"}} src={deltaimg} className="img-fluid rounded-start" alt="network error"/>
                        </div>
                        <div className="col-md-8" style={{cursor:"pointer"}}>
                            <div className="card-header" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delta Technology Management And Services">
                                <h5>DTMS</h5>
                            </div>
                            <div className="card-body" >
                                <h5 className="card-title">Consultant</h5>
                                <p className="card-text">10/2022 To 06/2023</p>
                                <p className="card-text">MUMBAI</p>
                                <p className="card-text"><small className="text-muted">Project Domain - Finance</small></p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='container'>
            <div class="accordion accordion-flush" id="accordionForRespons">
                <div class="accordion-item" style={{backgroundColor:"darkgray", color:"black"}}>
                    <h2 class="accordion-header" id="flush-headingOne" >
                        <button style={{backgroundColor:"gray"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseForRespons" aria-expanded="false" aria-controls="flush-collapseOne">
                        <h5>Responsibilities</h5>
                        </button>
                    </h2>
                <div id="flush-collapseForRespons" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionForSummery">
                    <div class="accordion-body">
                        <div className="row ">
                            <div className='container'> 
                               <div className='row'>
                                    <div className='col-1' style={{paddingLeft:"4%", color:"blue"}}><VscActivateBreakpoints /> </div>
                                    <div className='col-11'>
                                        <h6>
                                        Experiance in Core Java Collections, Exception Handling, Multi-Threading, Java 8 features like Lambda
                                        Expressions, Stream API, Bulk data operations on Collections which would increase the performance
                                        of the Application.
                                        </h6>
                                    </div>
                                    <div className='col-1' style={{paddingLeft:"4%", color:"blue"}}><VscActivateBreakpoints /> </div>
                                    <div className='col-11'>
                                        <h6>
                                        Design and implementation of Model, Controller, Service and DAO and utility specific 
                                        Java classes.
                                        </h6>
                                    </div>
                                    <div className='col-1' style={{paddingLeft:"4%", color:"blue"}}><VscActivateBreakpoints /> </div>
                                    <div className='col-11'>
                                        <h6>
                                        Worked for the user requirements and prepared the software functional activities.
                                        </h6>
                                    </div>
                                    <div className='col-1' style={{paddingLeft:"4%", color:"blue"}}><VscActivateBreakpoints /> </div>
                                    <div className='col-11'>
                                        <h6>
                                        Created multiple reports of the invoice module, expense module, also created a reports for the
                                        admin section in the software Designed complete module.
                                        </h6>
                                    </div>
                                    <div className='col-1' style={{paddingLeft:"4%", color:"blue"}}><VscActivateBreakpoints /> </div>
                                    <div className='col-11'>
                                        <h6>
                                        Manage the complete cycle of development projects including analysis of the client
                                        requirements, development, testing, delivery, support, analysis, etc.
                                        </h6>
                                    </div>
                                    <div className='col-1' style={{paddingLeft:"4%", color:"blue"}}><VscActivateBreakpoints /> </div>
                                    <div className='col-11'>
                                        <h6>
                                        Participated daily in Scrum meets to discuss different issues in the project.
                                        </h6>
                                    </div>
                                    <div className='col-1' style={{paddingLeft:"4%", color:"blue"}}><VscActivateBreakpoints /> </div>
                                    <div className='col-11'>
                                        <h6>
                                        Interact with Management to understand the requirements and clarifying the doubts.
                                        </h6>
                                    </div>

                               </div>

                            </div>
                        </div>    
                    </div>
                </div>
                </div>
            </div>
    </div>
        <hr></hr>
    </div>
  )
}

export default WorkExperiance

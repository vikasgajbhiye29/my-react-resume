import React from 'react'
import vb from'./image/vb.jpeg'
import delta from './image/delta.png'
import { VscActivateBreakpoints } from "react-icons/vsc";

function WorkExperiance() {
  return (
    <div className='container my-3' style={{borderRadius:"10px", marginBottom:"3px"}}>
        <div className='row text-center p-2'><h4 >Work Experiance</h4></div>
        <div className='row align-items-center' > 
            <div className="col m-4" style={{borderLeft:"25px solid blueviolet", borderRadius:"15px", borderRight:"5px solid blueviolet", borderBottom:"1px solid blueviolet", borderTop:"1px solid blueviolet",}}>
                    <div className="row align-items-center" >
                        <div className="col p-2" >
                            <img style={{ border:"2px solid gray", borderRadius:"10px"}} src={vb} alt="network error"/>
                        </div>
                        <div className="col" style={{cursor:"pointer", marginTop:"10px"}}>
                                <h5 data-bs-toggle="tooltip" data-bs-placement="bottom" title="VibrantMinds Technologies Pvt Ltd">VMT</h5>
                                <h5>Software Engineer</h5>
                                <p >07/2023 To Present</p>
                                <p>PUNE</p>
                                <p><small className="text-muted">Project Domain - E-Com</small></p>
                        </div>
                    </div>
               
            </div>
            <div className="col m-4" style={{borderLeft:"25px solid blueviolet", borderRadius:"15px", borderRight:"5px solid blueviolet", borderBottom:"1px solid blueviolet", borderTop:"1px solid blueviolet",}}>
                    <div className="row align-items-center" >
                        <div className="col p-2" >
                            <img style={{border:"2px solid gray", borderRadius:"10px"}} src={delta} alt="network error"/>
                        </div>
                        <div className="col" style={{cursor:"pointer", marginTop:"10px"}}>
                                <h5 data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delta Technology Management And Services">DTMS</h5>
                                <h5>Consultant</h5>
                                <p >10/2022 To 06/2023</p>
                                <p>MUMBAI</p>
                                <p><small className="text-muted">Project Domain - Finanace</small></p>
                        </div>
                    </div>
            </div>
            
        </div>
        <div className='container'>
            <div className="accordion accordion-flush" id="accordionForRespons">
                <div className="accordion-item" style={{backgroundColor:"wheat", color:"black"}}>
                    <h2 className="accordion-header" id="flush-headingOne" >
                        <button style={{backgroundColor:"goldenrod"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseForRespons" aria-expanded="false" aria-controls="flush-collapseOne">
                        <h5>Responsibilities</h5>
                        </button>
                    </h2>
                <div id="flush-collapseForRespons" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionForSummery">
                    <div className="accordion-body">
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
    </div>
  )
}

export default WorkExperiance

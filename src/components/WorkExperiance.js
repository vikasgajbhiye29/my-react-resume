import React from 'react'
import vb from'./image/vb.jpeg'
import deltaimg from './image/delta.png'
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
                                <p className="card-text"><small className="text-muted">PUNE</small></p>
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
                                <p className="card-text"><small className="text-muted">MUMBAI</small></p>
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

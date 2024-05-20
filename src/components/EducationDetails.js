import React from 'react'
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import dilpoma from './image/dilpoma.jpg'


function EducationDetails() {
  
  return (
    <div className='container'>

      <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item" style={{backgroundColor:"darkgray", color:"black"}}>
            <h2 class="accordion-header" id="flush-headingOne" >
              <button style={{backgroundColor:"gray"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                 <h5>Education Details</h5>
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div className="row  text-center">
                <div className='col'><h6>Course</h6></div>
                <div className='col'><h6>Institute</h6></div>
                <div className='col'><h6>University</h6></div>
                <div className='col'><h6>Passout</h6></div>
                <div className='col'><h6>CGPA/Per</h6></div>
                <div className='col'><h6>Marksheet</h6></div>
              </div>
              <hr></hr>
              <div className="row text-center">
                <div className='col' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Electrical Engineering"><p style={{cursor:"pointer"}}>BE</p></div>
                <div className='col' data-bs-toggle="tooltip" data-bs-placement="bottom" title="G.H.Raisoni College Of Engineering And Management Amravati"><p style={{cursor:"pointer"}}>GHRCEMA</p></div>
                <div className='col' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Sant Gadge Baba Amravati University Amravati"><p style={{cursor:"pointer"}}>SGBAUA</p></div>
                <div className='col' ><p style={{cursor:"pointer"}}>2017</p></div>
                <div className='col'data-bs-toggle="tooltip" data-bs-placement="bottom" title="CGPA"><p style={{cursor:"pointer"}}>6.56</p></div>
                {/* <!-- Button trigger modal --> */}
                <div className='col'><button class="btn btn-success" data-bs-placement="bottom" title="Click here for Marksheet" data-bs-toggle="modal" data-bs-target="#exampleModal">< HiOutlineViewfinderCircle /></button></div>
              </div>
              <hr></hr>
              <div className="row text-center">
                <div className='col'>Diploma</div>
                <div className='col'>PRPPIPA</div>
                <div className='col'>MSBTE</div>
                <div className='col'>2013</div>
                <div className='col'>64.18 %</div>
                <div className='col'><HiOutlineViewfinderCircle /></div>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog"style={{color:"black"}}>
            <div class="modal-content">
              <div class="modal-header">
                <h5  class="modal-title" id="exampleModalLabel">Graduation_Marksheet</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 <div className='container text-center'>
                    <img style={{width:"100%", height:"100%"}} src={dilpoma} alt='network error' />
                 </div>
              </div>
              <div class="modal-footer">
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EducationDetails

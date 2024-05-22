import React from 'react'
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import BE from './image/BE.jpeg'
import poly from './image/poly.jpeg'


function EducationDetails() {
  
  return (
    <div className='container'  >
      <div class="accordion accordion-flush" id="accordionFlushExample" >
          <div class="accordion-item" style={{backgroundColor:"wheat", color:"black",}}>
            <h2 class="accordion-header" id="flush-headingOne" >
              <button style={{backgroundColor:"goldenrod"}} class=" accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
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
                <div className='col'><h6>Certificate</h6></div>
              </div>
              <hr></hr>
              <div className="row text-center">
                <div className='col' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Electrical Engineering "><p style={{cursor:"pointer"}}>BE</p></div>
                <div className='col' data-bs-toggle="tooltip" data-bs-placement="bottom" title="G.H.Raisoni College Of Engineering And Management Amravati"><p style={{cursor:"pointer"}}>GHRCEMA</p></div>
                <div className='col' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Sant Gadge Baba Amravati University Amravati"><p style={{cursor:"pointer"}}>SGBAUA</p></div>
                <div className='col' ><p style={{cursor:"pointer"}}>2017</p></div>
                <div className='col'data-bs-toggle="tooltip" data-bs-placement="bottom" title="CGPA"><p style={{cursor:"pointer"}}>6.56</p></div>
                {/* <!-- Button trigger modal --> */}
                <div className='col'><button  style={{backgroundColor:"blueviolet", color:"white", marginTop:"8px"}} class="btn" data-bs-placement="bottom" title="Click here for Certificate" data-bs-toggle="modal" data-bs-target="#exampleModal">< HiOutlineViewfinderCircle /></button></div>
              </div>
              <hr></hr>
              <div className="row text-center">
              <div className='col' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Electrical Engineering"><p style={{cursor:"pointer"}}>Diploma</p></div>
                <div className='col' data-bs-toggle="tooltip" data-bs-placement="bottom" title="P.R.Pote(patil) Institute Of Ploytechnic Amravati"><p style={{cursor:"pointer"}}>PRPIPA</p></div>
                <div className='col' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Maharashtra State Board Technical Education"><p style={{cursor:"pointer"}}>MSBTE</p></div>
                <div className='col' ><p style={{cursor:"pointer"}}>2013</p></div>
                <div className='col'data-bs-toggle="tooltip" data-bs-placement="bottom" title="Percentage"><p style={{cursor:"pointer"}}>64.18</p></div>
                {/* <!-- Button trigger modal --> */}
                <div className='col'><button  style={{backgroundColor:"blueviolet", color:"white", marginTop:"8px"}} class="btn" data-bs-placement="bottom" title="Click here for Certificate" data-bs-toggle="modal" data-bs-target="#exampleModalForDiploma">< HiOutlineViewfinderCircle /></button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog"style={{color:"black"}}>
            <div class="modal-content">
              <div class="modal-header">
                <h5  class="modal-title" id="exampleModalLabel">Graduation_Certificate</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className='container'>
                    <div className='row'>
                      <img src={BE} alt='network error' />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal for diploma --> */}
      <div class="modal fade" id="exampleModalForDiploma" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog"style={{color:"black"}}>
            <div class="modal-content">
              <div class="modal-header">
                <h5  class="modal-title" id="exampleModalLabel">Diploma_Certificate</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className='container'>
                    <div className='row'>
                      <img src={poly} alt='network error' />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EducationDetails

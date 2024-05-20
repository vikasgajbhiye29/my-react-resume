import React from 'react'

function ProfileSummery() {
  return (
    <div className='container'>
            <div class="accordion accordion-flush" id="accordionForSummery">
                <div class="accordion-item" style={{backgroundColor:"darkgray", color:"black"}}>
                    <h2 class="accordion-header" id="flush-headingOne" >
                        <button style={{backgroundColor:"gray"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseForSummery" aria-expanded="false" aria-controls="flush-collapseOne">
                        <h5>Profile Summery</h5>
                        </button>
                    </h2>
                <div id="flush-collapseForSummery" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionForSummery">
                    <div class="accordion-body">
                        <div className="row ">
                            <div className='col'><p className='container' style={{textAlign:"justify"}}>Having 2 Years of IT experience and technical
                                                    proficiency in OOP, Collections Framework,
                                                    Multithreading and Exception Handling. Having
                                                    hands on experience in developing applications by
                                                    using Persistence Technologies like Hibernate and
                                                    Spring Data JPA. Having hands on working
                                                    experience in Web Server Apache Tomcat9. Having
                                                    hands on working experience with MySQL
                                                    Database. Easy learning and flexible to work on
                                                    different kinds of Technologies. Self-motivated and
                                                    Quick learner of new concepts and technologies</p></div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default ProfileSummery

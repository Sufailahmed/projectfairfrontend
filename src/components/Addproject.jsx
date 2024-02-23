import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../services/allAPI';
import { addProjectresponeContext } from '../context/ContextShare';

function Addproject() {
  const {addProjectRespone,setAddProjectResponse}=useContext(addProjectresponeContext)
  const [preview,setPreview]=useState("");
  const [token,setToken]=useState("")
const [projectDetails,setProjectDetails]=useState({
  title:"",
  language:"",
  github:"",
  website:"",
  overview:"",
  projectImage:""
})

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleAdd=async(e)=>{
  e.preventDefault();
  console.log('====================================');
  const {title,language,github,website,overview,projectImage}=projectDetails;
  if(!title || !language || !github || !website || !overview || !projectImage){
    alert("please fill the form completely")
  }
  else{
    //for uploading files  we have to send data as formdata
    //content type is multipart/form-data
    const reqBody=new FormData();
    reqBody.append('title',title)
    reqBody.append('language',language)
    reqBody.append('github',github)
    reqBody.append('website',website)
    reqBody.append('overview',overview)
    reqBody.append('projectImage',projectImage)
    const reqHeader={
      "Content-Type":"multipart/form-data",
      "Authorization":`Bearer ${token}`
    }

const result=await addProjectAPI(reqBody,reqHeader)
if(result.status===200){
  alert("Project added successfully")
  setAddProjectResponse(result)
  handleCloseClear();
  handleClose()
}
else{
  alert(result.response.data)

}
  }
  console.log(projectDetails);

}
useEffect(()=>{
  if(projectDetails.projectImage){
    //default code to create preview  of image that we take from  inout box with type file
    setPreview(URL.createObjectURL(projectDetails.projectImage))
  }
},[projectDetails.projectImage])
const handleCloseClear=()=>{
setProjectDetails({
  title:"",
  language:"",
  github:"",
  website:"",
  overview:"",
  projectImage:""
})
setPreview("")

}
useEffect(()=>{
  setToken(sessionStorage.getItem("token"))
},[])

  return (
  <>
  <Button variant='success' onClick={handleShow}>Add Project</Button>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div className='row'>
  <div className='col-lg-6'>
<label htmlFor="projectImageUpload">
  <input type="file" style={{display:"none",cursor:"pointer"}} id='projectImageUpload' onChange={(e)=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
  <img src={preview?preview:"https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"} height={"100px"} className='mt-2' alt="" width={"100%"}/>
</label>

  </div>
  <div className='col-lg-6 d-flex justify-content-center align-items-center flex-column '>
<div className='w-95 mt-2 mb-2'>
  <input type="text" className='form-control' placeholder='Project Titile' 
  value={projectDetails.title}
  onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})} />
</div>
<div className='mt-2 mt-2'> 
  <input type="text" className='form-control' placeholder='Languages Used'
   value={projectDetails.language}
   onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}
  
  />
</div>
<div className='mt-2 mt-2'> 
  <input type="text" className='form-control' placeholder='Github URL'
   value={projectDetails.github}
   onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})} />
</div>
<div className='mt-2 mt-2'> 
  <input type="text" className='form-control' placeholder='Website URL'
  value={projectDetails.website}
  onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}
  />
</div>
<div className='mt-2 w-95'>
  <textarea name="" id=""  className='form-control' placeholder='Overview'
  value={projectDetails.overview}
  onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}
  ></textarea>
</div>

  </div>


</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseClear}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleAdd}>
           Add Project
          </Button>
        </Modal.Footer>
      </Modal>
  
  
  </>
  )
}

export default Addproject
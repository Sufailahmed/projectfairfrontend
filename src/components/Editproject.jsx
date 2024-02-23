import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { baseURL } from '../services/baseURL';
import { editUserProjectAPI } from '../services/allAPI';

function Editproject({project}) {
   const [preview,setPreview]=useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [projectDetails,setProjectDetails]=useState({
         id:project._id,
        title:project.title,
        language:project.language,
        github:project.github,
        website:project.website,
        overview:project.overview,
        projectImage:""
      })
      useEffect(()=>{
        if(projectDetails.projectImage){
          setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
      },[projectDetails.projectImage])
      const handleReset=()=>{
        setProjectDetails({
   
          title:project.title,
          language:project.language,
          github:project.github,
          website:project.website,
          overview:project.overview,
          projectImage:""
        })
        setPreview("")
      }
      const handleUpdate=async (e)=>{
        e.prevent.default()
        const{title,language,github,website,overview,projectImage,id}=projectDetails;
        if(!title || !language || !github || !website || !overview || !projectImage  || !id){
          alert("Please Fill the Form Completely")
        }
        else{
          const reqBody=new FormData();
          reqBody.append("title",title);
          reqBody.append("language",language);
          reqBody.append("github",github);
          reqBody.append("website",website);
          reqBody.append("overview",overview);
          preview?reqBody.append("projectImage",projectImage):
          reqBody.append("projectImage",projectImage)
          const token=sessionStorage.getItem("token");
          if(preview){
            const reqHeader={
              "Content-Type":"multipart/form-data",
              "Authorization":`Bearer ${token}`
            }
            const result=await editUserProjectAPI(id,reqBody,reqHeader)
            console.log(result);
          }
          else{
            const reqHeader={
              "Content-Type":"application/json",
              "Authorization":`Bearer ${token}`
            }
            const result=await editUserProjectAPI(id,reqBody,reqHeader)
            console.log(result);

          }
          
        }
      }

  return (
<>
<button className='btn ' onClick={handleShow}><i class="fa-solid fa-pen-to-square text-info"></i></button>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div className='row'>
  <div className='col-lg-6'>
<label htmlFor="projectImageUpload">
  <input type="file" style={{display:"none",cursor:"pointer"}} id='projectImageUpload' onChange={(e)=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
  <img src={preview?preview:`${baseURL}/uploads/${project.projectImage}`} height={"100px"} className='mt-2' alt="" width={"100%"}/>
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
          <Button variant="secondary" onClick={handleReset} >
            Reset
          </Button>
          <Button variant="primary" onClick={handleUpdate} >
           Edit Project
          </Button>
        </Modal.Footer>
      </Modal>
  
</>
  )
}

export default Editproject
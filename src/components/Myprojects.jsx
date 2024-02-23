import React, { useContext, useEffect, useState } from 'react'
import Addproject from './Addproject'
import { userProjectAPI } from '../services/allAPI'
import { addProjectresponeContext } from '../context/ContextShare'
import Editproject from './Editproject'

function Myprojects() {
  const {addProjectRespone,setAddProjectResponse}=useContext(addProjectresponeContext)
  const [userProject, setUserProject] = useState([])
  const getUserProject = async () => {
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`

    }
    const result = await userProjectAPI(reqHeader);
    console.log("==inside my project");
    console.log(result);
    setUserProject(result.data)
  }
  useEffect(() => {
    getUserProject()
  }, [addProjectRespone])

  return (
    <>
      <div className='card shadow p-5 ms-3 me-3 mb-5'>
        <div className='d-flex mb-3'>
          <h3 className='text-success ms-3'>My Projects</h3>
          <div className='ms-auto'>
            <Addproject />
          </div>
        </div>
        <div className=''>

          {
            userProject.length > 0 ?
              userProject.map((item) => (
                <div className='border d-flex align-items-center rounded p-2'>
                  <h4>{item.title}</h4>
                  <div className='ms-auto'>
                   <Editproject project={item}/>
                   <a href={item.github}  className='btn'><i class="fa-brands fa-github text-success"></i></a>
                    <button className='btn'><i class="fa-solid fa-trash text-danger"></i></button>

                  </div>
                </div>

              )) :
              <p className='text-danger fw-bolder mt-3'>No projects uploaded yet!</p>
        }


        </div>

      </div>
    </>
  )
}

export default Myprojects
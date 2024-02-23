import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Projectcard from '../components/Projectcard'
import { allProjectAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

function Project() {
  const [istoken, setIsToken] = useState(false)
  const [searchKey, setSearchKey] = useState("")
  const [allProject, setallProject] = useState([])
  const getallProject = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await allProjectAPI(searchKey, reqHeader);

      setallProject(result.data)
    }
  }
  useEffect(() => {
    getallProject()
  }, [searchKey])
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setIsToken(true)
    }
  })
  console.log("serachn key", searchKey);
  return (
    <>
      <Header />
      <div className='d-flex justify-content-center flex-column align-items-center '>
        <h2>All Projects</h2>
        <div className='mt-5 w-25 d-flex'>
          <input type="text" className='form-control' placeholder='search projects' onChange={(e) => setSearchKey(e.target.value)} />
          <i class="fa-solid fa-magnifying-glass fa-rotate-90" style={{ marginLeft: "-45px" }}></i>



        </div>
      </div>
      <Row className='m-5'>
        {
          allProject.length > 0 ?
            allProject.map((items) => (
              <Col sm={12} lg={6} md={6}>
                <Projectcard project={items} />
              </Col>
            )) :
            <div>
              {
                istoken ?
                  <p>No projects uploaded yet</p> :
                  <div className='d-flex justify-content-center align-itmes-center flex-column '>
                    <img src="https://gpbirlaedufoundation.com/images/Login.jpg" alt="" width={"300px"} height={"300px"} />
                    <p className='text-danger fs-4'>Please <Link style={{ textDecoration: "none" }} to={'/login'}>Login </Link> To view Projects</p>
                  </div>
              }

            </div>

        }




      </Row>

    </>
  )
}

export default Project
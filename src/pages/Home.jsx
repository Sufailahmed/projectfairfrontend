import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleimage from '../assets/img2.jpg'
import Projectcard from '../components/Projectcard'
import { Link } from 'react-router-dom'
import { homePorjectAPI } from '../services/allAPI'

function Home() {
  const [homeProject, sethomeProject] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLoggedIn(true)
    }
  }, [])
  const getHomeProject = async () => {
    const result = await homePorjectAPI();
    console.log(result);
    sethomeProject(result.data)
  }
  useEffect(() => {
    getHomeProject();
  }, [])
  return (
    <>
      <div style={{ width: "100%", height: "80vh" }} className='mb-5 bg-success'>
        <div className='container-fluid rounded'>
          <Row className='alighn-items-center p-5'>
            <Col sm={12} md={6} lg={6}>
              <h2 className='text-light mb-3 ' style={{ fontSize: "70px", fontWeight: "600" }}>Project Fair</h2>
              <p>
                One stop destinantion for all web applicaiton projects
              </p>
              {
                isLoggedIn ?
                  <Link to='/dashboard'>

                    <button className='btn btn-warning rounded'>Manage Project</button>
                  </Link>
                  :

                  <Link to={'/login'}>
                    <button className='btn btn-light rounded'>Get Started</button>
                  </Link>

              }

            </Col>
            <Col sm={12} md={6} lg={6}>

              <img src={titleimage} height={"450px"} alt="" style={{ marginTop: "30px" }} />

            </Col>


          </Row>

        </div>


      </div>
      <div className='mt-5 all-project'>
        <div className='text-center'>
          <h1>Explore My projects</h1>
          <marquee scrollAmount={20}>
            <div className='d-flex mt-5 mb-5'>
              {
                homeProject.length > 0 ?
                  homeProject.map((item) => (
                    <div className='ms-5 ' style={{ width: "400px" }}>
                      <Projectcard project={item} />

                    </div>

                  )) :
                  <p>No project to load</p>
              }


            </div>
          </marquee>
          <div className='text-center mt-5 mb-5'>
            <h6><Link to={'/project'}>See more Projects</Link></h6>

          </div>


        </div>




      </div>

    </>
  )
}

export default Home
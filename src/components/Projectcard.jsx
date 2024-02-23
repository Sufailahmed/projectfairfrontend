import React from 'react'

import Card from 'react-bootstrap/Card';
import media from '../assets/mediaplayer.png'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { baseURL } from '../services/baseURL';

function Projectcard({project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>



      <Card style={{ width: '18rem' }} onClick={handleShow} >
        <Card.Img variant="top" src={`${baseURL}/uploads/${project.projectImage}`} height={'200px'} width={'300px'}/>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>


        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} lg={6}>
              <img src={`${baseURL}/uploads/${project.projectImage}`}width={"100%"} height={"220px"} alt="" />

            </Col>
            <Col md={6} lg={6}>
              <p>{project.overview}</p>
            </Col>


          </Row>
          <div className='d-flex mt-3'>
<a href={project.website} target='_blank' style={{color:"black",fontSize:"25px"}}>
<i class="fa-solid fa-link"></i>
</a>
<a href={project.github} target='_blank' style={{color:"black",fontSize:"25px"}} className='ms-2'> 

<i class="fa-brands fa-github"></i>
</a>

          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default Projectcard
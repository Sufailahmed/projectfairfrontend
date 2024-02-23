import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='d-flex align-item-center justify-content-center mt-5 bg-success p-3'>
    <div className='footer d-flex align-item-center justify-content-evenly mt-5'>
      <div className='website' style={{width:"400px"}}>
        <h5>  <i class="fa-brands fa-stack-overflow"></i> project Fair</h5>
        <p style={{textAlign:"justify"}}>Lorem impsaglgha bglbng ddsb hglah ggr gbgbghkg slhg saufaul ah nen dfhfa d fdslgdf dfdssf dffuyeef ff sfgf hasf ccbxcbd cchhzcc</p>

      </div>
      <div className='links d-flex flex-column ms-5'>
        <h4>Links</h4>
        <Link to='/' style={{textDecoration:"none",color:"black"}}>Home </Link>
        <Link to='/Login' style={{textDecoration:"none",color:"black"}}>Login </Link>
        <Link to='/Register' style={{textDecoration:"none",color:"black"}}>Register</Link>
       

      </div>
      <div className='guides d-flex flex-column ms-5'>
        <h4>Guides</h4>
        <Link to='https://react.dev/' target='_blank' style={{textDecoration:"none",color:"black"}}>React</Link>
        <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:"none",color:"black"}}>React bootrasp</Link>
        <Link to='https://bootswatch.com/' target='_blank' style={{textDecoration:"none",color:"black"}}>Boots Watch</Link>


      </div>
      <div className='contact ms-4'>
        <h4>Contact Us</h4>
        <div className='d-flex'>
        <input type="text" className='form-control' placeholder='Enter Your Email'/>
        <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className=' d-flex justify-content-evenly align-items-center'>
          <Link to='https://www.instagram.com/sufail__ahmed?igshid=OGQ5ZDc2ODk2ZA==' className='mt-3 '>
          <i class="fa-brands fa-instagram  text-dark" style={{fontSize:"25px"}} ></i>
          </Link>
          <Link to='https://www.facebook.com/' className='mt-3'>
          <i class="fa-brands fa-facebook text-dark" style={{fontSize:"25px"}} ></i>
          </Link>
          <Link to='https://github.com/Sufailahmed' className='mt-3'>
          <i class="fa-brands fa-github text-dark" style={{fontSize:"25px"}}></i>
          </Link>
          <Link  to='https://twitter.com/AhammadSuf23560' className='mt-3 '><i class="fa-brands fa-x-twitter text-dark" style={{fontSize:"25px"}}></i></Link>

        </div>
       
        
      </div>
    </div>

  </div>
  <p className='mt-5 text-center'>
    Copyright &copy; 2024 Project Fair Built With React 
  </p>
 
 </>
  )
}

export default Footer
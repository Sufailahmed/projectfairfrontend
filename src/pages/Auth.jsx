import React, { useState } from 'react'
import authimg from '../assets/img1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { loginAPI, registerAPI } from '../services/allAPI';





function Auth({ register }) {
  const navigate=useNavigate()
  const registerForm = register ? true : false;
  const [userdata, setuserdata] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handileRegister = async (e) => {
    e.preventDefault()
    console.log(userdata)
    const { username, email, password } = userdata
    if (!username || !email || !password) {
      alert("plese fill the form")
    }
    else {
      const result = await registerAPI(userdata)
      console.log(result)
      if (result.status === 200) {
        alert("user registered succesfully")
        setuserdata({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login')
      }
      else {
        alert(result.response.data)
      }
    }

  }
  const handilelogin=async(e)=>{
    e.preventDefault()
    const{email,password}=userdata
    if (!email || !password) {
      alert("plese fill the form")
    }else{
      const result=await loginAPI(userdata)
      if(result.status===200){
        sessionStorage.setItem("existinguser",JSON.stringify(result.data.existingUser));
        sessionStorage.setItem("token",result.data.token)
        alert("User logged succefully")
        setuserdata({
          username:"",
          email:"",
          password:""
        })
        navigate('/')
      }
      else{
        alert(result.response.data)
      }

    }

  }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center ' style={{ width: "100%", height: "100vh" }}>
        <div className='w-75 container'>
          <Link to="/" style={{ textDecoration: "none" }} className='mt-2' ><i class="fa-solid fa-arrow-left"></i>
            Back To Home
          </Link>
          <div className='card bg-success'>
            <div className='row align-items-center' >
              <div className='col-lg-6 col-md-6 p-5' >
                <img className='rounded' src={authimg} alt="" width={"100%"} height={""} />
              </div>
              <div className='col-lg-6 col-md-6 p-3' >
                <div className='d-flex align-items-center flex-column'>
                  <h2 style={{ fontWeight: "bolder" }}>
                    <i class='fa-brands fa-stack-overflow me-2'></i>
                    Project Fair
                  </h2>
                  <h4>
                    {
                      registerForm ? "Sign up to your account" : "login in to your account"
                    }
                  </h4>
                  <Form>
                    {
                      registerForm &&
                      <Form.Group md="4" controlId="validationCustom01">
                        <Form.Label>User Name:</Form.Label>
                        <Form.Control

                          type="text"
                          placeholder="User name"
                          value={userdata.username}
                          onChange={(e) => setuserdata({ ...userdata, username: e.target.value })}


                        />

                      </Form.Group>


                    }
                    <Form.Group md="4" controlId="validationCustom01">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control

                        value={userdata.email}


                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => setuserdata({ ...userdata, email: e.target.value })}


                      />

                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom01">
                      <Form.Label>Password</Form.Label>
                      <Form.Control

                        type="Password"
                        placeholder="Entr your Password"
                        value={userdata.password}
                        onChange={(e) => setuserdata({ ...userdata, password: e.target.value })}



                      />

                    </Form.Group>
                  </Form>
                  {
                    registerForm ?
                      <div>
                        <button className='btn btn-warning mt-3' onClick={handileRegister}>Register</button>
                        <p>allredy a user? click here<Link to="/login">login</Link></p>
                      </div> :
                      <div>
                       <button className='btn btn-warning mt-3' onClick={handilelogin}>login</button>
                        <p>allredy a user? click here<Link to="/register">register</Link></p>

                        <p></p>
                      </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
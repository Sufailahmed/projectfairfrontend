import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
    const [open, setOpen] = useState(false);
    return (
        < >
            <div className='card shadow p-5 ' >
                <div className='d-flex  justify-content-between'>
                    <h2>
                        Profile
                    </h2>
                    <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-chevron-down"></i></button>

                </div>
                <Collapse in={open}>
                    <div>
                        <label htmlFor="profile" className='text-center mb-2 mt-3'>
                            <input type="file" id='profile' style={{ display: "none" }} />
                            <img className='rounded' height={'100px'} src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" alt="" />

                        </label>
                        <div>
                            <div className='mt-3'>
                                <input type="text" className='form-control' placeholder='github-link' />

                            </div>
                        </div>
                        <div className='mt-3 mb-3'>
                            <input type="text" className='form-control' placeholder='linkedin-link' />
                        </div>
                        <button className='btn btn-success w-100'>Update</button>
                    </div>
                </Collapse>


            </div >


        </>
    )
}

export default Profile
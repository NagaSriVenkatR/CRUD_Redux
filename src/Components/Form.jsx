import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Form.css'
import Logo from './logo.png'
import lock from './lock .png'
import gender from './male-and-female.png'
import clock from  './rotation-lock .png'
import { IoPersonCircle } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
function Form() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-8 d-md-flex parent py-5">
          <div className="col-md-6 my-5">
            <div className='mt-5'>
              <img src={Logo} alt="" />
              <h2 className='text-white'>STARTECH</h2>
            </div>
            <div className='float-start'>
              <div className='register mb-3'>
                <h3>REGISTER</h3>
              </div>
              <div className='register'>
                <h3>LOGIN</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 form px-5 py-4">
            <div>
              <h3 className="text-start ms-1">Register</h3>
              <p className='text-start'>Create your account.It's free and only take a minute</p>
            </div>
            <form action="">
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white icon">
                    <IoPersonCircle />
                  </span>
                  <input className="form-control" type="text" placeholder='Full Name'/>
                </div>
              </div>
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white icon">
                    <FaPhoneAlt />
                  </span>
                  <input className="form-control" type="tel" placeholder='Phonenumber'/>
                </div>
              </div>
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white icon ">
                    <MdEmail />
                  </span>
                  <input className="form-control" type="email" placeholder='Email' />
                </div>
              </div>
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white ">
                    <img className="lock" src={lock} alt="" />
                  </span>
                  <input className="form-control" type="password" placeholder='Password'/>
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white ">
                    <img className="lock" src={clock} alt="" />
                  </span>
                  <input className="form-control" type="password" placeholder='Confirm Password' />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white icon">
                    <FaLocationDot />
                  </span>
                  <input className="form-control" type="text" placeholder='Location' />
                </div>
              </div>
              <div className='mb-2'>
                <div className="input-group">
                  <span className="input-group-text bg-white ">
                    <img className="gender" src={gender} alt="" />
                  </span>
                  <select className="form-select" name="" id="">
                    <option value="">Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div className='form-check mb-3'>
                <input className='form-check-input' type="checkbox" name="" id="" />
                <label className='form-check-label'>I accept the Terms of Use and Privacy Policy </label>
              </div>
            </form>
            <div className="button row">
              <div className='col-md-4 me-5'>
                <button className="btn btn-danger reset">RESET</button>
              </div>
              <div className='col-md-4'>
                <button className="btn btn-primary reset">SIGNUP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form

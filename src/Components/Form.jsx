import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Form.css'
import Logo from './logo.png'
import lock from './lock.png'
import gender from './gender.jpg'
import clock from  './rotation-lock.png'
import { IoPersonCircle } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
function Form() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-10 d-md-flex parent ps-5 py-5">
          <div className="col-md-7">
            <div>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="col-md-5 form p-5">
            <div>
              <h3 className="text-start">Register</h3>
            </div>
            <form action="">
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white icon">
                    <IoPersonCircle />
                  </span>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white icon">
                    <FaPhoneAlt />
                  </span>
                  <input className="form-control" type="tel" />
                </div>
              </div>
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white icon ">
                    <MdEmail />
                  </span>
                  <input className="form-control" type="email" />
                </div>
              </div>
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white ">
                    <img className="lock" src={lock} alt="" />
                  </span>
                  <input className="form-control" type="password" />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white ">
                    <img className="lock" src={clock} alt="" />
                  </span>
                  <input className="form-control" type="password" />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white ">
                    <FaLocationDot />
                  </span>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div>
                <div className="input-group">
                  <span className="input-group-text bg-white ">
                    <img className='gender' src={gender} alt="" />
                  </span>
                  <select className='form-select' name="" id="">
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
            </form>
            <div className='button justify-content-between d-flex'>
              <button className='btn btn-primary'>Register</button>
              <button className='btn btn-danger'>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form

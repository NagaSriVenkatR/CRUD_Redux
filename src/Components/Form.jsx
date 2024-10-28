import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Form.css'
import Logo from './logo.png'
import lock from './lock .png'
import gender from './male-and-female.png'
import clock from  './rotation-lock .png'
import Upward from './upward-arrow.png'
import { IoPersonCircle } from 'react-icons/io5';
import { FaCircle, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import Arrow from './right-chevron.png'
import { updateForm, setError, submitFormData } from "../Redux/Action/Action";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData); // Access formData from state
  const errors = useSelector((state) => state.error); // Access errors from state
  let emailPattern =
    /^([a-zA-Z0-9]+)@([a-zA-Z0-9-]+).([a-zA-Z]+).([a-zA-Z]{2,20})$/;
  let upperCasePattern = /[A-Z]/;
  let lowerCasePattern = /[a-z]/;
  let numberPattern = /[0-9]/;
  let specialCharacterPattern = /[~!@#%&()$^_?]/;
  let minlengthCharacterPattern = /^.{8,16}$/;
  let phonenumberPattern = /^([0-9]{10})$/;
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     dispatch(updateForm(name, value)); 
   };
   const handleBlur = (e) => {
     const { name, value } = e.target;
     switch (name) {
       case "name":
         if (!value.trim()) {
           dispatch(setError("name", "Name is required"));
         }else{
          dispatch(setError('name',""))
         }
         break;
       case "email":
         if (!formData.email) {
          dispatch(setError("email","email is required"));
         } else {
          if (!emailPattern.test(value)) {
            dispatch(setError("email", "Enter a valid email address"));
          }else{
            dispatch(setError("email",""));
          }
         }
         break;
       case "password":
         if (!formData.password) {
          dispatch(setError("password","Password is required"))
         } else {
          if (!minlengthCharacterPattern.test(value)) {
            dispatch(
              setError("password", "Password must be at least 8 characters required")
            );
          }
          else if (!lowerCasePattern.test(value)) {
        dispatch(
          setError("password", "Password must be at least 1 lowercase required")
        );
      } else if (!numberPattern.test(value)) {
        dispatch(
          setError("password", "Password must be at least 1 number required")
        );
      } else if (!specialCharacterPattern.test(value)) {
        dispatch(
          setError("password", "Password must be at least 1 special character required")
        );
      } else if (!upperCasePattern.test(value)) {
        dispatch(
          setError("password", "Password must be at least 1 uppercase required")
        );
      } else {
        dispatch(
          setError("password", "")
        );
      }
         }
         break;
       case "confirmPassword":
         if (formData.password === "") {
           dispatch(setError("confirmPassword", "Confirm password is required"));
         }else{
          if (formData.password !== formData.confirmPassword) {
            dispatch(
              setError("confirmPassword", "Confirm password do not match with password")
            );
          } else {
            dispatch(
              setError("confirmPassword", "")
            );
          }
         }
         break;
       case "phoneNumber":
         if (!formData.phoneNumber) {
          dispatch(
            setError("phoneNumber", "Phonenumber is required")
          );
         } else {
          if (!phonenumberPattern.test(value)) {
            dispatch(
              setError("phoneNumber", "Enter a valid 10-digit phone number")
            );
          }else{
            dispatch(setError("phoneNumber",""))
          }
         }
         break;
       case "location":
         if (!value.trim()) {
           dispatch(setError("location", "Location is required"));
         }
         break;
       case "gender":
         if (!value.trim()) {
           dispatch(setError("gender", "gender is required"));
         }
         break;
       default:
         break;
     }
   };
   const validateForm = () => {
    let isValid = true;
    if (formData.name === "") {
      dispatch(setError("name", "Name is required"));
      isValid = false;
    } else {
      dispatch(setError("name", ""));
    }
    if (formData.phoneNumber === "") {
      dispatch(setError("phoneNumber", "Phonenumber is required"));
      isValid = false;
    } else {
      if (!phonenumberPattern.test(formData.phoneNumber)) {
        dispatch(
          setError("phoneNumber", "Enter a valid 10-digit phone number")
        );
        isValid = false;
      } else {
        dispatch(setError("phoneNumber", ""));
      }
    }
    if (formData.email === "") {
      dispatch(setError("email", "Email is required"));
      isValid = false;
    } else {
      if (!emailPattern.test(formData.email)) {
        dispatch(setError("email", "Enter a valid email address"));
        isValid = false;
      } else {
        dispatch(setError("email", ""));
      }
    }
    if (formData.password === "") {
      dispatch(setError("password", "Password is required"));
      isValid = false;
    } else {
      if (!minlengthCharacterPattern.test(formData.password)) {
        dispatch(
          setError(
            "password",
            "Password must be at least 8 characters required"
          )
        );
        isValid = false;
      } else if (!lowerCasePattern.test(formData.password)) {
        dispatch(
          setError("password", "Password must be at least 1 lowercase required")
        );
        isValid = false;
      } else if (!numberPattern.test(formData.password)) {
        dispatch(
          setError("password", "Password must be at least 1 number required")
        );
        isValid = false;
      } else if (!specialCharacterPattern.test(formData.password)) {
        dispatch(
          setError(
            "password",
            "Password must be at least 1 special character required"
          )
        );
        isValid = false;
      } else if (!upperCasePattern.test(formData.password)) {
        dispatch(
          setError("password", "Password must be at least 1 uppercase required")
        );
        isValid = false;
      } else {
        dispatch(setError("password", ""));
      }
    }
    if (formData.confirmPassword === "") {
      dispatch(setError("confirmPassword", "Confirm Password is required"));
      isValid = false;
    } else {
      if (formData.password !== formData.confirmPassword) {
        dispatch(
          setError(
            "confirmPassword",
            "Confirm password do not match with password"
          )
        );
        isValid = false;
      } else {
        dispatch(setError("confirmPassword", ""));
      }
    }
    if (formData.location === "") {
      dispatch(setError("location", "Location is required"));
      isValid = false;
    } else {
      dispatch(setError("location", ""));
    }
    if (formData.gender === "") {
      dispatch(setError("gender", "Gender is required"));
      isValid = false;
    } else {
      dispatch(setError("gender", ""));
    }
    return isValid;
   }
   const handleSubmit = (e) => {
     e.preventDefault();
      if (validateForm()) {
        dispatch(submitFormData(formData));
        navigate("/table"); // Navigate to the table page
      }
   };

   const handleReset = () => {
     dispatch(updateForm("name", ""));
     dispatch(updateForm("email", ""));
     dispatch(updateForm("password", ""));
     dispatch(updateForm("confirmPassword", ""));
     dispatch(updateForm("phoneNumber", ""));
     dispatch(updateForm("gender", ""));
     dispatch(updateForm("location", ""));
   };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-8 d-md-flex parent py-5">
          <div className="col-md-6  start">
            <div className="mt-md-4 text-center">
              <img src={Logo} alt="" />
              <h2 className="text-white">STARTECH</h2>
            </div>
            <div className="d-flex float-start d-md-block d-none  mb-5 regis">
              <div className="register mb-3">
                <h3>REGISTER</h3>
              </div>
              <div className="register">
                <h3>LOGIN</h3>
              </div>
            </div>
            <div className="color d-md-flex d-none">
              <div className="blue me-2">
                <FaCircle />
              </div>
              <div className="orange me-2">
                <FaCircle />
              </div>
              <div className="white">
                <FaCircle />
              </div>
            </div>
          </div>
          <div className="col-md-6 form px-md-5 py-4">
            <div>
              <h3 className="text-start ms-1 d-md-block d-none">Register</h3>
              <p className="text-start">
                Create your account.It's free and only take a minute
              </p>
              <div className="arrow d-md-block d-none">
                <img src={Arrow} alt="" />
              </div>
              <div className="upward d-md-none d-block">
                <img src={Upward} alt="" />
              </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white icon">
                    <IoPersonCircle />
                  </span>
                  <input
                    className="form-control"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                  />
                </div>
                <p className="text-danger error">{errors.name}</p>
              </div>
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white icon">
                    <FaPhoneAlt />
                  </span>
                  <input
                    className="form-control"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="tel"
                    placeholder="Phonenumber"
                  />
                </div>
                <p className="error">{errors.phoneNumber}</p>
              </div>
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white icon ">
                    <MdEmail />
                  </span>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={formData.email}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                </div>
                <p className="error">{errors.email}</p>
              </div>
              <div className="col-md mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white ">
                    <img className="lock" src={lock} alt="" />
                  </span>
                  <input
                    className="form-control"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <p className="error">{errors.password}</p>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white ">
                    <img className="lock" src={clock} alt="" />
                  </span>
                  <input
                    className="form-control"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
                <p className="error">{errors.confirmPassword}</p>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white icon">
                    <FaLocationDot />
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    name="location"
                    value={formData.location}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    placeholder="Location"
                  />
                </div>
                <p className="error">{errors.location}</p>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-white ">
                    <img className="gender" src={gender} alt="" />
                  </span>
                  <select
                    className="form-select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    id=""
                  >
                    <option value="">Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <p className="error">{errors.gender}</p>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input custom-checkbox"
                  type="checkbox"
                  name=""
                  id=""
                />
                <label className="form-check-label accept ms-2">
                  I accept the Terms of Use and Privacy Policy{" "}
                </label>
              </div>
              <div className="d-flex d-md-none butt">
                <div className="col-md-4 sign">
                  <button
                    className="btn btn-danger reset"
                    onClick={handleReset}
                  >
                    RESET
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-primary reset"
                    onClick={handleSubmit}
                  >
                    SIGNUP
                  </button>
                </div>
              </div>
            </form>
            <div className="button row d-none d-md-flex">
              <div className="col-md-4 me-5">
                <button
                  className="btn btn-danger reset"
                  type="button"
                  onClick={handleReset}
                >
                  RESET
                </button>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-primary reset"
                  type="submit"
                  onClick={handleSubmit}
                >
                  SIGNUP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form

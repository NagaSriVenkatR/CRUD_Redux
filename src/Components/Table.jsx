import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editEntry, deleteEntry } from "../Redux/Action/Action";
import { useNavigate } from 'react-router-dom';
import Manage from './app-development.png'
import './table.css'
import { FaSearch } from 'react-icons/fa';
import { MdEdit, MdEmail } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
function Table({setFormData}) {
  const formDataList = useSelector((state) => state.formDataList);
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const handleEdit = (index) => {
    const dataToEdit = formDataList[index];
    setFormData(dataToEdit); // Populate the form with the data
    dispatch(editEntry(index, dataToEdit));
    navigate(`/form?edit=${index}`);
  };

  const handleDelete = (index) => {
    dispatch(deleteEntry(index));
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-xxl-10">
          <div className="col-md d-flex">
            <div className="col-md-2 bg-primary d-flex p-3 company">
              <img className="manage" src={Manage} alt="" />
              <p className="text-white m-2">Manage App</p>
            </div>
            <div className="p-4">
              <p className="text-black">
                <FaSearch className="mx-2" />
                Search for Details
              </p>
              <div className="icon">
                <MdEmail />
                <IoIosNotifications />
                <p className='bg-primary create'>
                  <MdEdit />
                  Create
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Phonenumber</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Location</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {formDataList.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td>{data.location}</td>
                    <td>{data.gender}</td>
                    <td>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table

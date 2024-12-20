import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteEntry, editEntry, setEditing} from "../Redux/Action/Action";
import { useNavigate } from 'react-router-dom';
import Manage from './app-development.png'
import './table.css'
import { FaCaretDown, FaSearch, FaUserEdit } from 'react-icons/fa';
import { MdEdit, MdEmail } from 'react-icons/md';
import { IoIosNotifications, IoMdSettings } from 'react-icons/io';
import { PiGreaterThanBold } from 'react-icons/pi';
import Menu from './menu.png'
import Doc from './document-holder.png'
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BsBarChartLineFill } from 'react-icons/bs';
import { TiUserDelete } from 'react-icons/ti';
import { IoPersonAdd } from 'react-icons/io5';
function Table() {
  const submittedData = useSelector((state) => state.submittedData);
  console.log(submittedData);
    useEffect(() => {
      console.log("Updated Submitted Data:", submittedData);
    }, [submittedData]);
  const dispatch = useDispatch();
   const navigate = useNavigate();
const handleEdit = (id) => {
  const dataToEdit = submittedData.find((data) => data.id === id);

  if (!dataToEdit) {
    console.error("No data found for ID:", id);
    return; // Exit if no match
  }

  dispatch(editEntry(id, dataToEdit)); // Dispatch with id
  dispatch(setEditing(true));
  navigate(`/form?edit=${id}`); // Navigate with id
};



  const handleDelete = (index) => {
    dispatch(deleteEntry(index));
  };
    const handleNewData = () => {
      navigate("/form"); // Navigate to the form for adding new data
    };
  return (
    <div className="container">
      <div className="row pare mt-5">
        <div className="col-md-12 d-flex">
          <div className="col-md-2 bg-primary d-flex p-3 company">
            <img className="manage" src={Manage} alt="" />
            <p className="text-white m-2">Manage App</p>
          </div>
          <div className="d-flex col-md-10  justify-content-between">
            <div className="p-3">
              <p className="text-black">
                <FaSearch className="mx-2 icon" />
                Search for Details
              </p>
            </div>
            <div className="d-flex icon">
              <MdEmail className="fs-3 mt-3" />
              <IoIosNotifications className="fs-3 mt-3" />
              <span className="create mt-3 px-3 fs-5" onClick={handleNewData}>
                <IoPersonAdd className="me-2 " />
                New Employee
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-12 d-flex p-3">
          <div className="mx-3">
            <div className="d-flex">
              <p className="proj bg-primary text-white">
                <MdEdit />
              </p>
              <p className="text-primary">Project</p>
            </div>
            <div className="d-flex mt-3">
              <img src={Menu} alt="" className="menu" />
              <p className="text-secondary">Menu</p>
            </div>
            <div className="d-flex mt-3">
              <span className="doc">
                <img src={Doc} alt="" className="doc-img" />
              </span>
              <p className="text-secondary">Docreader</p>
            </div>
            <div className="d-flex mt-3">
              <span className=" icon">
                <RiMoneyDollarCircleLine className="dollar" />
              </span>
              <p className="text-secondary">Finanse</p>
            </div>
            <div className="d-flex mt-3">
              <span className="doc">
                <BsBarChartLineFill className="report" />
              </span>
              <p className="text-secondary">Report</p>
            </div>
            <div className="d-flex mt-3">
              <span className="doc">
                <IoMdSettings className="setting" />
              </span>
              <p className="text-secondary">Settings</p>
            </div>
          </div>
          <div className="col-md table-responsive">
            <div className="d-flex justify-content-between m-2">
              <div className="d-flex m-2">
                <p className="text-primary me-3">Project </p>
                <PiGreaterThanBold className="me-3" />
                <p className="text-primary me-3">2016</p>
                <PiGreaterThanBold className="me-3" />
                <p className="text-body">Szpital Jana Pawala II</p>
              </div>
              <div className="">
                <span>
                  <FaSearch className="mx-2" />
                </span>
                <span className="me-2">
                  Standard View <FaCaretDown />
                </span>
                <span>
                  Recent <FaCaretDown />
                </span>
              </div>
            </div>
            <div className="m-2 col-md">
              <table className="table table-striped table-hover">
                <thead>
                  <tr className="">
                    <th>
                      <input type="checkbox" name="" id="" />
                    </th>
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
                  {submittedData.map((data, index) => (
                    <tr key={data.id}>
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.phoneNumber}</td>
                      <td>{data.email}</td>
                      <td>{data.password}</td>
                      <td>{data.location}</td>
                      <td>{data.gender}</td>
                      <td className="d-flex">
                        <button
                          className="btn btn-success"
                          onClick={() => handleEdit(data.id)}
                        >
                          <FaUserEdit />
                        </button>
                        <button
                          className="btn btn-warning ms-2"
                          onClick={() => handleDelete(index)}
                        >
                          <TiUserDelete />
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
    </div>
  );
}

export default Table

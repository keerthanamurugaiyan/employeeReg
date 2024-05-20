import React, { useEffect, useState } from 'react';
import { deleteinput, getinput } from '../Reducer/Action/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, } from 'react-router-dom';
// import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Spinner';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Table = () => {
  const inputs = useSelector((state) => state.inputs);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null)
  const dispatch = useDispatch();
  // const nav = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    dispatch(getinput());
    setTimeout(
      () => {
        setLoading(false)

      },1000
    )
  }, [dispatch]);

  // const backbtn = () => {
  //   nav("/");
  // };

  const showDialog = (id) => {
 
     setSelectedUserId(id)
 ;
     setDialogVisible(true);
   };   

   const closeDialog = () => {
    setDialogVisible(false);
    setSelectedUserId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteinput(id));
    setDialogVisible(false);
  };

  return (
    <>
    {loading && <Spinner/>}
      {/* <Nav /> */}
      <h1 className='list'>Employee List</h1>
      <div className='tablebody'>
      
        <div className="containerTable">
          
          {/* <h3>Add +</h3> */}
          <table className='stripped-table'>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Joining Date</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Position</th>
                <th>Address</th>
                <th>Blood Group</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {inputs.map((input, index) => (
                <tr key={input.id}>
                  <td>{index + 1}</td> {/* Serial number starts from 1 */}
                  <td>{input.employeeid}</td>
                  <td>{input.fullName}</td>
                  <td>{input.email}</td>
                  <td>{input.phonenumber}</td>
                  <td>{input.joiningdate}</td>
                  <td>{input.gender}</td>
                  <td>{input.department}</td>
                  <td>{input.position}</td>
                  <td>{input.address}</td>
                  <td>{input.bloodgroup}</td>
                  <td>
                  
                    {/* <button className='icon-button' onClick={() => handleDelete(input.id)}>
                    
                    </button> */}
                    <div className='btned'>
                    <Link to={`/form/${input.id}/edit`}>
                      <button className='icon-button s'>
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </Link>

                    <button
                    className='icon-button n'
                      onClick={() => showDialog(input.id)}>
                     <FontAwesomeIcon icon={faTrash} />
                    </button>
                    </div>

                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


          {dialogVisible && (
            <dialog open className="dailog">
              {/* <i className="fas fa-times"></i> */}
              <p className='con'>conformation notification?</p>
              <h3 className="title">
               Are you sure you want to delete this!
              </h3>
              
              <form method="dialog">
                
                <button
                  type="button"
                  className="dai yes"
                  onClick={() => handleDelete(selectedUserId)}
                >
                  Yes
                </button>
                
                <button className="dai no" type="button" onClick={closeDialog}>
                  No
                </button>
              </form>
            </dialog>
          )}
          {/* <button className='backbtn' onClick={backbtn}>Back</button> */}
        </div>
      </div>
    </>
  );
};

export default Table;

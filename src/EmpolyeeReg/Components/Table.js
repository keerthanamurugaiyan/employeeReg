import React, { useEffect, useState } from 'react';
import { deleteinput, getinput } from '../Reducer/Action/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Spinner';

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
      <Nav />
      <div className='tablebody'>
        <div className="containerTable">
          <h1 className='list'>Employee List</h1>
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Position</th>
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
                  <td>{input.gender}</td>
                  <td>{input.department}</td>
                  <td>{input.position}</td>
                  <td>
                  <button
                    className='icon-button'
                      onClick={() => showDialog(input.id)}
                    >
                     <FontAwesomeIcon icon={faTrash} />
                    </button>
                    {/* <button className='icon-button' onClick={() => handleDelete(input.id)}>
                    
                    </button> */}
                    <Link to={`/form/${input.id}/edit`}>
                      <button className='icon-button'>
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


          {dialogVisible && (
            <dialog open className="dailog">
              <h3 className="title-haven">
               Are you sure you want to delete this!
              </h3>
              
              <form method="dialog">
                
                <button
                  type="button"
                  className="yes"
                  onClick={() => handleDelete(selectedUserId)}
                >
                  Yes
                </button>
                <button className="no" type="button" onClick={closeDialog}>
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

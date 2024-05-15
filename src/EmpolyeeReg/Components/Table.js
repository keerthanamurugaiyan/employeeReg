import React, { useEffect } from 'react'
import { getinput } from '../Reducer/Action/Action';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


    const Table = () => {
        const inputs = useSelector((state) => state.inputs);
        const dispatch = useDispatch();
        const nav = useNavigate()
      
        useEffect(() => {
          dispatch(getinput());
        }, [dispatch]);

        const backbtn = () => {
            nav("/")
        }


    return (
        <div className='tablebody'>

    <div className="containerTable">
        <h1 className='list'>Employee List</h1>
        <table>
            <thead>
                <tr>
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
                {inputs.map((input)=>(
                    <tr key={input.id}>
                        <td>{input.employeeid}</td>
                        <td>{input.fullName}</td>
                        <td>{input.email}</td>
                        <td>{input.gender}</td>
                        <td>{input.department}</td>
                         <td>{input.position}</td> 
                    </tr>
                ))}

            
            </tbody>
        </table>

        <button className='backbtn' onClick={backbtn}>Back</button>


    </div>


        
        </div>
    )
}

export default Table

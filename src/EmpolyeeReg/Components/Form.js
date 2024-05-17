import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import '../../App.css';
import { createinput } from '../Reducer/Action/Action';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';


function Form() {

    const handleGenderChange = (e) => {
        setGender(e.target.value);
      };
    

    const [employeeid,setEmployeeid]= useState("")
    const [fullName,setFullName]= useState("")
    const [email,setEmail] = useState("")

    const [gender,setGender]= useState("")
    const [department,setDepartment]= useState("");
    const [position,setPosition]= useState("")
    const nav = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
    
        dispatch(createinput({ employeeid , fullName, email, gender, department, position}));
  nav("/regtable")
    };
  
    return (
        <>
        <Nav/>
        <div className='formbody'>
                    
                <div className="container">
        
                    <h1 className='header'>Employee Registration</h1>
        
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="empID">Employee ID :</label>
                                <input type="text" id="empID" name="empID" placeholder='Enter Your Employee Id'
                                value={employeeid}
                                onChange={(e) => setEmployeeid(e.target.value)}
                        
                                required/>
                            </div>
                
                            <div className="form-group">
                                <label for="fullName">Full Name :</label>
                                <input type="text" id="fullName" name="fullName" placeholder='Enter Your FullName'
                                 value={fullName}
                                 onChange={(e) => setFullName(e.target.value)}
                                 required/>
                            </div>
                
                            <div className="form-group">
                                <label for="email">Email :</label>
                                <input type="email" id="email" name="email" placeholder='Enter Your Email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                            </div>

                            <div className="form-group gender">
                                <label for="gender">Gender:</label>
                                <input
                                    id="male"
                                    value="male"
                                    type="radio"
                                    className="formredio"
                                    name="gender"
                                    checked={gender === 'male'}
                                    onChange={handleGenderChange} required/>
                                <label for="male">Male</label>
                                
                                <input
                                    id="female"
                                    value="female"
                                    type="radio"
                                    name="gender"
                                    checked={gender === 'female'}
                                    onChange={handleGenderChange} required/>
                                <label for="female">Female</label>
                                
                                <input
                                    id="other"
                                    value="other"
                                    type="radio"
                                    name="gender"
                                    checked={gender === 'other'}
                                    onChange={handleGenderChange} required/>
                                <label for="other">Other</label>
                                </div>


                            <div class="form-group">
                            <label for="department" class="fw-bold">Department :</label>
                            <input list="dep" id="ment" placeholder="Select your Department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            required/>
                            <datalist id="dep" >
                                <option value="HR(Human Resources)"></option>
                                <option value="IT(Information Technology)"></option>
                                <option value="Design"></option>
                                <option value="Testing"></option>
                                <option value="Operations"></option>
                                <option value="Finance"></option>
                                <option value="Marketing"></option>
                                <option value="cybersecurity "></option>
                            </datalist>
                            {/* <div className="error text-danger" id="lanError"></div> */}
                        </div>
                
                            <div className="form-group">
                                <label for="position">Position :</label>
                                <input type="text" id="position" name="position" placeholder='Enter Your Position'
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                required/>
                            </div>
                
                            <button className='regbtn' type="submit">Register</button>
                </form>
             </div>
            </div>
        
        
        </div>
        </>
    )
}

export default Form

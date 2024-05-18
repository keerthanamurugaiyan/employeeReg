import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import '../../App.css';
import { createinput } from '../Reducer/Action/Action';
import { useNavigate } from 'react-router-dom';


function Form() {

    const handleGenderChange = (e) => {
        setGender(e.target.value);
      };
    

    const [employeeid,setEmployeeid]= useState("");
    const [fullName,setFullName]= useState("");
    const [email,setEmail] = useState("");
    const [phonenumber, setNumber] = useState("");
    const [joiningdate, setDate] = useState("");
    const [department,setDepartment]= useState("");
    const [bloodgroup, setBloodgroup] = useState("");
    const [position,setPosition]= useState("");
    const [gender,setGender]= useState("");
    const [address, setAddress] = useState("");
    const nav = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
    
        dispatch(createinput({ employeeid , fullName, email,phonenumber,joiningdate, department,bloodgroup, position,gender,address,}));
  nav("/regtable")
    };
  
    return (
        <>
        <div className='formbody'>
                    
                <div className="container">
        
                    <h1 className='header'>Employee Registration</h1>
        
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className='emp'>
                            <div className="form-group idn">
                                <label for="empID">Employee ID :</label>
                                <input type="text" id="empID" name="empID" placeholder='Enter Your Employee Id'
                                value={employeeid}
                                onChange={(e) => setEmployeeid(e.target.value)}
                        
                                required/>
                            </div>
                
                            <div className="form-group idn">
                                <label for="fullName">Full Name :</label>
                                <input type="text" id="fullName" name="fullName" placeholder='Enter Your FullName'
                                 value={fullName}
                                 onChange={(e) => setFullName(e.target.value)}
                                 required/>
                            </div>
                            </div>
                
                            <div className='emp'>
                            <div className="form-group idn">
                                <label for="email">Email :</label>
                                <input type="email" id="email" name="email" placeholder='Enter Your Email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                            </div>

                            <div className="form-group idn">
                                <label for="number">Phone Number :</label>
                                <input type="number" id="number" name="number" placeholder='Enter Your Number' 
                                value={phonenumber}
                                onChange={(e) => setNumber(e.target.value)}
                                required/>
                            </div>
                            </div>

                            <div className='emp'>
                            <div className="form-group idn">
                                <label for="date">joining date :</label>
                                <input type="date" id="date" name="date" placeholder='Enter Your joing Date' 
                                value={joiningdate}
                                onChange={(e) => setDate(e.target.value)}
                                required/>
                            </div>

                            <div class="form-group idn">
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
                        </div>

                        <div className='emp'>
                        <div className="form-group idn">
                                <label for="bloodgroup">Blood Group :</label>
                                <input type="text" id="bloodgroup" name="bloddgroup" placeholder='Enter Your Blood Group' 
                                value={bloodgroup}
                                onChange={(e) => setBloodgroup(e.target.value)}
                                required/>
                            </div>

                            <div className="form-group idn">
                                <label for="position">Position :</label>
                                <input type="text" id="position" name="position" placeholder='Enter Your Position'
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                required/>
                            </div>
                            </div>

                            <div className='emp'>
                            <div className="form-group gender">
                                <label for="gender">Gender:</label>
                                <div>
                                <input
                                    id="male"
                                    value="male"
                                    type="radio"
                                    className="formredio"
                                    name="gender"
                                    checked={gender === 'male'}
                                    onChange={handleGenderChange} required/>
                                <label for="male">Male</label>
                                </div>
                               
                                
                                <div><input className='idn'
                                    id="female"
                                    value="female"
                                    type="radio"
                                    name="gender"
                                    checked={gender === 'female'}
                                    onChange={handleGenderChange} required/>
                                <label for="female">Female</label>
                                </div>
                                <div>
                                <input className='idn'
                                    id="other"
                                    value="other"
                                    type="radio"
                                    name="gender"
                                    checked={gender === 'other'}
                                    onChange={handleGenderChange} required/>
                                <label for="other">Other</label>
                                </div>
                               
                                </div>

                            <div className="form-group idn address">
                                <label className='' for="address">Address :</label>
                                <textarea className='add' type="address" id="address" name="address" placeholder='Enter Your Address' 
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                rows={3}
                                required/>
                            </div>   
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

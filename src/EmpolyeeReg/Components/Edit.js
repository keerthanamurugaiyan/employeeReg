import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import {  getbyid, updateinput } from '../Reducer/Action/Action';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from './Nav';


function Edit() {

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
    const {id} = useParams()
    const inputupdate = useSelector((state) => state.inputs.find(input =>input.id === id));
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedInput = {
            employeeid,
            fullName,
            email,
            gender,
            department,
            position
        };
        dispatch(updateinput(id, updatedInput));
        setEmployeeid('');
        setFullName('');
        setEmail('');
        setGender('');
        setDepartment('');
        setPosition('');
        nav("/regtable");
    };
    useEffect(()=>{
        dispatch(getbyid(id))
    },[dispatch,id]
    );

    useEffect(() => {
        if (inputupdate) {
            setEmployeeid(inputupdate.employeeid || '');
            setFullName(inputupdate.fullName || '');
            setEmail(inputupdate.email || '');
            setGender(inputupdate.gender || '' );
            setDepartment(inputupdate.department || '');
            setPosition(inputupdate.position || '' );
        }
    }, [inputupdate]);



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
                                    onChange={handleGenderChange} />
                                <label for="male">Male</label>
                                
                                <input
                                    id="female"
                                    value="female"
                                    type="radio"
                                    name="gender"
                                    checked={gender === 'female'}
                                    onChange={handleGenderChange}/>
                                <label for="female">Female</label>
                                
                                <input
                                    id="other"
                                    value="other"
                                    type="radio"
                                    name="gender"
                                    checked={gender === 'other'}
                                    onChange={handleGenderChange}/>
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
                
                            <button type="submit">Register</button>
                </form>
             </div>
            </div>
        
        
        </div>
        </>
    )
}

export default Edit


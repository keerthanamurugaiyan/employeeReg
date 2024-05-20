import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../App.css';
import { createinput } from '../Reducer/Action/Action';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [employeeid, setEmployeeid] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setNumber] = useState("");
    const [joiningdate, setDate] = useState("");
    const [department, setDepartment] = useState("");
    const [bloodgroup, setBloodgroup] = useState("");
    const [position, setPosition] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({});
    const nav = useNavigate();
    const dispatch = useDispatch();

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };
 const handlereset = () =>{
    setEmployeeid("");
    setFullName("");
    setEmail("");
    setNumber("");
    setDate("");
    setDepartment("");
    setBloodgroup("");
    setPosition("");
    setGender("");
    setAddress("");
 }

    const validateInputs = () => {
        let errors = {};
        if (!employeeid) {
            errors.employeeid = "Employee ID is required";
        }
        if (!fullName) {
            errors.fullName = "Full Name is required";
        } else if (fullName.length < 3) {
            errors.fullName = "Full Name must be at least 3 characters";
        }
        if (!email) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "Please enter a valid email address !";
        }
        if (!phonenumber) {
            errors.phonenumber = "Phone Number is required";
        } else if (phonenumber.length < 10) {
            errors.phonenumber = "Phone Number must be at least 10 digits";
        }
        if (!joiningdate) {
            errors.joiningdate = "Joining Date is required";
        }
        if (!department) {
            errors.department = "Department is required";
        }
        if (!bloodgroup) {
            errors.bloodgroup = "Blood Group is required";
        }
        if (!position) {
            errors.position = "Position is required";
        }
        if (!gender) {
            errors.gender = "Please select a gender";
        }
        if (!address) {
            errors.address = "Address is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInputs()) {
            dispatch(createinput({ employeeid, fullName, email, phonenumber, joiningdate, department, bloodgroup, position, gender, address }));
            nav("/regtable");
        }
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
                                    <label htmlFor="empID">Employee ID :</label>
                                    <input className='input' type="text" id="empID" name="empID" placeholder='Enter Your Employee Id'
                                        value={employeeid}
                                        onChange={(e) => setEmployeeid(e.target.value)}
                                         />
                                    {errors.employeeid && <span className="error">{errors.employeeid}</span>}
                                </div>

                                <div className="form-group idn">
                                    <label htmlFor="fullName">Full Name :</label>
                                    <input className='input' type="text" id="fullName" name="fullName" placeholder='Enter Your FullName'
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                         />
                                    {errors.fullName && <span className="error">{errors.fullName}</span>}
                                </div>
                            </div>

                            <div className='emp'>
                                <div className="form-group idn">
                                    <label htmlFor="email">Email :</label>
                                    <input className='input' type="email" id="email" name="email" placeholder='Enter Your Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                         />
                                    {errors.email && <span className="error">{errors.email}</span>}
                                </div>

                                <div className="form-group idn">
                                    <label htmlFor="number">Phone Number :</label>
                                    <input className='input' type="number" id="number" name="number" placeholder='Enter Your Number'
                                        value={phonenumber}
                                        onChange={(e) => setNumber(e.target.value)}
                                         />
                                    {errors.phonenumber && <span className="error">{errors.phonenumber}</span>}
                                </div>
                            </div>

                            <div className='emp'>
                                <div className="form-group idn">
                                    <label htmlFor="date">Joining Date :</label>
                                    <input className='input' type="date" id="date" name="date" placeholder='Enter Your Joining Date'
                                        value={joiningdate}
                                        onChange={(e) => setDate(e.target.value)}
                                         />
                                    {errors.joiningdate && <span className="error">{errors.joiningdate}</span>}
                                </div>

                                <div className="form-group idn">
                                    <label htmlFor="department">Department :</label>
                                    <input className='input' list="dep" id="ment" placeholder="Select your Department"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                         />
                                    <datalist id="dep">
                                        <option value="HR(Human Resources)" />
                                        <option value="IT(Information Technology)" />
                                        <option value="Design" />
                                        <option value="Testing" />
                                        <option value="Operations" />
                                        <option value="Finance" />
                                        <option value="Marketing" />
                                        <option value="Cybersecurity" />
                                    </datalist>
                                    {errors.department && <span className="error">{errors.department}</span>}
                                </div>
                            </div>

                            <div className='emp'>
                                <div className="form-group idn">
                                    <label htmlFor="bloodgroup">Blood Group :</label>
                                    <input className='input' type="text" id="bloodgroup" name="bloodgroup" placeholder='Enter Your Blood Group'
                                        value={bloodgroup}
                                        onChange={(e) => setBloodgroup(e.target.value)}
                                         />
                                    {errors.bloodgroup && <span className="error">{errors.bloodgroup}</span>}
                                </div>

                                <div className="form-group idn">
                                    <label htmlFor="position">Position :</label>
                                    <input className='input' type="text" id="position" name="position" placeholder='Enter Your Position'
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                         />
                                    {errors.position && <span className="error">{errors.position}</span>}
                                </div>
                            </div>

                            <div className='emp'>
                                <label htmlFor="gender">Gender:</label>
                                <div className="form-group gender">
                                    <div className='gen'>
                                        <input
                                            id="male"
                                            value="male"
                                            type="radio"
                                            className="formredio"
                                            name="gender"
                                            checked={gender === 'male'}
                                            onChange={handleGenderChange}  />
                                        <label htmlFor="male">Male</label>
                                    </div>

                                    {/* <div> */}
                                        <input className='idn'
                                            id="female"
                                            value="female"
                                            type="radio"
                                            name="gender"
                                            checked={gender === 'female'}
                                            onChange={handleGenderChange}  />
                                        <label className='' htmlFor="female">Female</label>
                                    {/* </div> */}
                                    {/* <div> */}
                                        <input className='idn'
                                            id="other"
                                            value="other"
                                            type="radio"
                                            name="gender"
                                            checked={gender === 'other'}
                                            onChange={handleGenderChange}  />
                                        <label htmlFor="other">Other</label>
                                    {/* </div> */}
                                </div>
                                </div>
                                {errors.gender && <span className="error">{errors.gender}</span>}

                                <div className='emp'>
                                <div className="form-group idn address">
                                    <label htmlFor="address">Address :</label>
                                    <textarea className='add' type="address" id="address" name="address" placeholder='Enter Your Address'
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        rows={1}
                                         />
                                    {errors.address && <span className="error">{errors.address}</span>}
                                </div>
                            </div>
<button type='button' onClick={handlereset}>reset</button>
                            <button className='regbtn' type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;

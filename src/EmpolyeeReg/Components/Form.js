import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createinput } from '../Reducer/Action/Action';


function Form() {

    const [employeeid,setEmployeeid]= useState("")
    const [fullName,setFullName]= useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
    
        dispatch(createinput({ employeeid , fullName, }));
     
    };
  
    return (
        <>
                    
                <div className="container">
        
                    <h1 className='header'>Employee Registration</h1>
        
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="empID">Employee ID :</label>
                                <input type="text" id="empID" name="empID"
                                value={employeeid}
                                onChange={(e) => setEmployeeid(e.target.value)}
                        
                                required/>
                            </div>
                
                            <div className="form-group">
                                <label for="fullName">Full Name :</label>
                                <input type="text" id="fullName" name="fullName"
                                 value={fullName}
                                 onChange={(e) => setFullName(e.target.value)}
                                 required/>
                            </div>
                
                            <div className="form-group">
                                <label for="email">Email :</label>
                                <input type="email" id="email" name="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                            </div>

                            <div className='form-group gender'>
                                <label for="gender">Gender:</label>
                    
                                <input id="maleg" value="male" type="radio" name="gender"/>
                                <label for="male">Male</label>

                                <input id="femaleg" value="female" type="radio" name="gender"></input>
                                <label for='female'>Female</label>
                                
                            </div>
                
                            <div className="form-group">
                                <label for="password">Password:</label>
                                <input type="password" id="password" name="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required/>
                            </div>
                
                            <div className="form-group">
                                <label for="confirmPassword">Confirm Password:</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" 
                                value={confirmpassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required/>
                            </div>
                
                            <button type="submit">Register</button>
                </form>
             </div>
            </div>
        
        
        </>
    )
}

export default Form

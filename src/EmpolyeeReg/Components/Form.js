import React from 'react'

function Form() {
    return (
        <>
            
            <div>
                {/* <form> */}
                    
                    <div className="container">
        
            <h1 className='header'>Employee Registration</h1>
        
            <div className="content">
            <form>
                <div className="form-group">
                    <label for="empID">Employee ID :</label>
                    <input type="text" id="empID" name="empID" required/>
                </div>
                
                <div className="form-group">
                    <label for="fullName">Full Name :</label>
                    <input type="text" id="fullName" name="fullName" required/>
                </div>
                
                <div className="form-group">
                    <label for="email">Email :</label>
                    <input type="email" id="email" name="email" required/>
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
                    <input type="password" id="password" name="password" required/>
                </div>
                
                <div className="form-group">
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required></input>
                </div>
                
                <button type="submit">Register</button>
            </form>
             </div>
            </div>
        {/* </form> */}
            </div>
        
        
        </>
    )
}

export default Form

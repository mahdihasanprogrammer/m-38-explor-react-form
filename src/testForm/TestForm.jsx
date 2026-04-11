import React, { useState } from 'react';
import UseTestHook from './UseTestHook';

const TestForm = ({setStudentInfo, studentInfo}) => {

    console.log(studentInfo)

const [name , handleName] = UseTestHook('');
const [email , handleEmail] = UseTestHook('');
const [password , handlePassword] = UseTestHook('');

const [error, setError] = useState('')




const handleSubmit = (event) =>{
    event.preventDefault();

    if(name.length ==0){
        setError('please enter your name')
        return
    }
    else if(email.length==0){
        setError('enter your valid email');
        return
    }
    else if(password.length <6){
        setError('password must be 6 characters');
        return 
    }
    else{
        setError('');
    }


    const studentData = {
        name, email, password
    }

    setStudentInfo([...studentInfo,studentData])
}



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Student" placeholder='name' onChange={handleName} /><br />
                <input type="email" placeholder='email'  name='email' onChange={handleEmail} /> <br />
                <input type="password" placeholder='password' name="password" onChange={handlePassword} /> <br />
               <input type="submit" value="submit" />
                <p style={{color:'red'}}>{error}</p>
            </form>
        </div>
    );
};

export default TestForm;
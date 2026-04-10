import React, { useState } from 'react';

const ControlledField = () => {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error ,setError] = useState('');

    const handleTextChange = (e)=>{
        setText(e.target.value);
        console.log(e.target.value)
    }
 
    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const handleChange =(e) =>{
      console.log(e.target.value)
      setPassword(e.target.value);

       if(password.length < 6){
            setError('password must be 6 characters');
       }
       else{
        setError('')
       }
        
    }

       const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.password.value);
        // if(password.length <6){
        //     setError('password must be 6 characters or longer')
        // }else{
        //     setError('')
        // }

        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleTextChange} defaultValue={text}/>
                <input onChange={handleEmailChange}
                 type="email" name="email" id="" placeholder='email' defaultValue={email} />
                <br />
                <input type="password" onChange={handleChange} defaultValue={password} name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <h3>{error}</h3>
            {/* <h2>{email}</h2> */}
        </div>
    );
};

export default ControlledField;
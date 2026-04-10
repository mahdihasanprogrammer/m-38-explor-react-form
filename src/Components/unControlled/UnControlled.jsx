import React, { useRef } from 'react';

const UnControlled = () => {
    const textRef  = useRef();
    const emailRef = useRef('');
    const passwordRef = useRef('');


     
   
    const handleSubmit = (e)=>{
        e.preventDefault();
      console.log(emailRef.current, 'submitted');
      const pass = passwordRef.current.value;
      console.log(pass)
      console.log(textRef.current.value)
       
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" ref={textRef}/>
                <input ref={emailRef} type="email" name="email"  /><br />
                <input ref={passwordRef} type="password" name="password"  /><br />
                <input type="submit" value="submit" />
               
            </form>
        </div>
    );
};

export default UnControlled;
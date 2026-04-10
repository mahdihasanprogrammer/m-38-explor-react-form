import React, { useState } from 'react';

const SimpleForm = () => {

    const [data, setData]=useState([]);

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target.name.value);
    console.log(e.target.email.value);

    const name = e.target.name.value;
    const email = e.target.email.value;
    setData([name,email])
}
console.log(data)


    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input type="text" name='name' /> 
                <br />
                <input type="email" name='email' />

                <br />
                <input type="submit" value="Submit" />
            </form>

            <div>
                <p>{data}</p>
            </div>
        </div>
    );
};

export default SimpleForm;
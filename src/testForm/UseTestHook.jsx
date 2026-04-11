import React, { useState } from 'react';

const UseTestHook = (initialValue) => {
    const [inputField, setInputField] = useState(initialValue);

    const handleChange = (e)=>{
        setInputField(e.target.value);
    }

    return [inputField, handleChange];

};

export default UseTestHook; 
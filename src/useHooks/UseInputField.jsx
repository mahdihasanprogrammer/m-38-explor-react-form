import React, { useState } from 'react';

const UseInputField = (initialValue) => {
   
    const [fieldValue, setFieldValue] = useState(initialValue);

    const handleOnChange = (e)=>{
        setFieldValue(e.target.value);
    }

    return [fieldValue, handleOnChange]
};

export default UseInputField;
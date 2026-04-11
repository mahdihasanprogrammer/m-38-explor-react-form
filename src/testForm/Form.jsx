import React, { useState } from 'react';


import FormTable from './FormTable';
import TestForm from './testForm';

const Form = () => {
    const [studentInfo, setStudentInfo] = useState([]);

    return(
 
        <>
            <h3>Add Student info</h3>
            <TestForm studentInfo={studentInfo} setStudentInfo={setStudentInfo} />
            <FormTable studentInfo={studentInfo}/>
        </>
        
    )
}



export default Form;
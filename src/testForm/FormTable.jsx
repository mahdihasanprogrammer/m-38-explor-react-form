import React from 'react';

const FormTable = ({studentInfo}) => {

console.log(studentInfo)
    return (
        <div>
            <table>
                {studentInfo.length >0 &&
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>password</th>
                        
                    </tr>
                </thead>
                }

                <tbody>
                    {
                        studentInfo.map((student, index) => 
                            <tr>
                                <td>{index}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.password}</td>
                            </tr>
                        )
                    }
                </tbody>
                
            </table>
        </div>
    );
};

export default FormTable;
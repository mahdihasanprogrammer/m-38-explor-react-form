import React from 'react';

const FormAction = () => {

    const handleAction = (formData)=>{
       console.log(formData)
        console.log(formData.get('name'));
        console.log(formData.get('email'))
    }

    return (
        <div>
            <form action={handleAction}>
                <input type="text" name="name" id="" /> <br />
                <input type="email" name="email" id="" /> <br />
                <input type="submit" value="submit" />

            </form>
        </div>
    );
};

export default FormAction;
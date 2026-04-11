import UseInputField from "../../useHooks/useInputField";



const HookForm = () => {

const [text, changeText] = UseInputField('');
const [email,changeEmail] = UseInputField('');
const [password, changePassword] = UseInputField('');

const handleChangeSubmit = (e)=>{

    e.preventDefault();
//    console.log(e.target.email.value)
   

}

    return (
     <div>
        <form onSubmit={handleChangeSubmit}>
            <input type="text" name="name" onChange={changeText} /> <br />
            <input type="email" name="email" onChange={changeEmail}/>  <br />
            <input type="password" name="password" onChange={changePassword} /> <br />
            <input type="submit" value="Submit" />
        </form>
        <div>
            <h2>{text}</h2>
            <p>{email}</p>
            <h3>{password}</h3>
        </div>
     </div>
    );
};

export default HookForm;
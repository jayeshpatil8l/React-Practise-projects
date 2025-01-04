import { useState } from "react"

const Form = () => {
    const [name, setName] = useState("");

    function handleChange(e){
        setName(e.target.value); 
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Submitted!");
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <label htmlFor = "name"> Name: </label>
            <input  
            id = "name" 
            placeholder = "name" 
            name = "name" 
            value = {name}
            onChange={handleChange}
            type="toggle" />
            <br></br>
            <button disabled = {!name} type = "Submit"> Submit</button>
        </form>
        </div>
    );
}

export default Form;


    

import { useState } from "react";
import "../formulario/formulario.css"

function MyForm(){
    const [inputs, setInputs] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        setInputs("")
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="myform">
                <label>Digite seu nome: 
                    <input 
                        type="text" 
                        name="username" 
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>

                <label>Digite sua idade: 
                    <input 
                        type="number" 
                        name="age" 
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" id="btn-submit"/>
            </form>
        </>
    );
};

export default MyForm;
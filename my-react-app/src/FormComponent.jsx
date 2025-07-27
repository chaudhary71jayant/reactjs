//states in react using the usestate

import { useState } from "react";

function FormComponent() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`submitted name : ${name}`);
    };

    return(
        <form onSubmit={handleSubmit}>
            Enter the name : <input 
            type="text"
            value={name}
            onChange={handleChange}
            />

        <button type="Submit">Submit </button>
        </form>
    );
}

export default FormComponent;
import { useState } from "react";

import "./FormInput.css"

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, handleChange, id, ...inputProps} = props;

    const handleFocus = () => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label>{label}</label>
            <input 
                {...inputProps} 
                onChange={handleChange} 
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)} 
                focused={focused.toString()}/>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput;
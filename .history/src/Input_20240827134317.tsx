import React from 'react';
import './Input.css'
import {useState} from 'react';
import CurrencyInput from 'react-currency-input-field';



function Input(){

    const [value, setValue] = useState(0);

    function handleValueChange(value : number){
        useState(value);
    }

    return (
        <form>
            <label className = "Amount"> Enter Amount: 
                <CurrencyInput
                    className = "InputTextBox" 
                    type = "number" 
                    prefix = "$"
                    // defaultValue = {0.00}
                    decimalsLimit = {2}
                    onValueChange = {handleValueChange}
                />

            </label>
        </form>
    )
}

export default Input;
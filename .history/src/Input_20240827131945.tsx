import React from 'react';
import './Input.css'

function Input(){
    return (
        <form>
            <label className = "Amount"> Enter Amount: 
                <input className = "InputTextBox" type="number" />

            </label>
        </form>
    )
}

export default Input;
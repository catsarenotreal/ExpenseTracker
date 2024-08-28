import React from 'react';
import './Input.css'

function Input(){
    return (
        <form>
            <label className = "Amount Name"> Enter Amount:
                <input type="number" />
                
            </label>
        </form>
    )
}

export default Input;
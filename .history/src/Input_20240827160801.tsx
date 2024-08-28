import React, { FormEvent } from 'react';
import './Input.css'
import {useState} from 'react';



function Input(){

    const [value, setValue] = useState(0);

    const handleSubmit = (e : FormEvent)  => {
        setValue(Number(e.currentTarget));
        return;
    }

    return (
        <main>
            <form>
                <label className = "Amount"> Enter Amount:  
                    <input
                        className = "InputTextBox" 
                        type = "number"
                        min ='0'
                    />
                    <button onClick = {handleSubmit}>
                       Submit
                    </button>
                </label>
            </form>

        </main>
        
    )
}

export default Input;
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
            <form onSubmit = {handleSubmit} >
                <label className = "Amount"> Enter Amount:  
                    <input
                        // className = "InputTextBox" 
                        // type = "number"
                        // min ='0'
                    />
                    {/* <input type = "submit">
                       Submit
                    </input> */}
                </label>
            </form>

        </main>
        
    )
}

export default Input;
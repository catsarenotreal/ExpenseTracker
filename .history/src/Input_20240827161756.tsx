import React, { FormEvent } from 'react';
import './Input.css'
import {useState} from 'react';



function Input(){

    const [value, setValue] = useState(0);

    const handleSubmit = (e : FormEvent)  => {
        var inputvalue : string = (e.currentTarget).toString();
        if (checkValidNumber(inputvalue)){
            setValue(Number(inputvalue))
        }
        else{
            alert("not a valid number!!")
        }
        console.log(value);
        return;
    }

    const checkValidNumber = (val : string) : boolean => {
        // 1. is number format
        // 2. is 2 dp at most
        // 3. is >= 0

        if (/^\d+(\.\d{1,2})?$/.test(val)){ // valid number format, at most 2dp
            if (Number(val) > 0){
                return true;
            }
        }

        return false;
    }

    return (
        <main>
            <form>
                <label className = "Amount"> Enter Amount:  
                    <input
                        className = "InputTextBox" 
                        type = "string"
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
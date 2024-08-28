import React, { FormEvent } from 'react';
import './Input.css'
import {useState} from 'react';



function Input(){

    const [value, setValue] = useState(0);

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event)  => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault()
        for (let [key, val] of formData.entries()){
            console.log(key, value);
        }
        // if (checkValidNumber(inputvalue)){
        //     setValue(Number(inputvalue))
        //     console.log("complete")
        // }
        // else{
        //     alert("not a valid number!!")
        // }
        return;
    }

    const checkValidNumber = (val : string) : boolean => {
        // 1. is number format
        // 2. is 2 dp at most
        // 3. is >= 0
        console.log("hi")
        console.log(val)

        if ( /^(\d{0,10}\.\d{1,2})?$/.test(val) ){ // valid number format, at most 2dp
            if (Number(val) > 0){
                return true;
            }
        }

        return false;
    }

    return (
        <main>
            <form onSubmit = {handleSubmit}>
                <label className = "Amount"> Enter Amount:  
                    <input
                        className = "InputTextBox" 
                        type = "string"
                    />
                    <button >
                       Submit
                    </button>
                </label>
            </form>

        </main>
        
    )
}

export default Input;
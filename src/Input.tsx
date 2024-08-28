import React, { FormEvent } from 'react';
import './Input.css'
import {useState} from 'react';


// todo: add new components for budget (and maybe tabs)
// todo: tabs for breakdown and visualisation with custom date range

function Input(){

    const [value, setValue] = useState(0);

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event)  => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault()

        // let [keys, inputVals] = formData.entries();
        // let inputVal : string = inputVals[0];
        // console.log(inputVals)

        let inputVal = formData.get("amountInput")?.toString()
        
        if (!inputVal){
            alert("ERROR AMOUNTINPUT IS NOT STRING FORMAT");
            return;
        }
        
        if (checkValidNumber(inputVal)){
            setValue(Number(inputVal))
            console.log(inputVal + " is a valid number")
        }
        else{
            alert("not a valid number!!")
        }
        return;
    }

    const checkValidNumber = (val : string) : boolean => {
        // 1. is number format
        // 2. is 2 dp at most
        // 3. is >= 0

        if ( /^(\d+(\.\d{1,2})?)$/.test(val) ){ // valid number format, at most 2dp
            if (Number(val) > 0){
                return true;
            }
        }

        return false;
    }

    return (
        <main>
            <form method = "post" onSubmit = {handleSubmit}>
                <label className = "Amount"> Enter Amount:  
                    <input
                        className = "InputTextBox" 
                        name = "amountInput"
                        type = "string"
                    />
                    <input
                        className = "Category"
                        name = "spendCategory"
                        type = "string" 
                        // todo: how to make this input temp, like allow custom or existing choice?
                        // select vs custom
                    />
                    <button >
                       Submit!!
                    </button>
                </label>
            </form>

        </main>
        
    )
}

export default Input;
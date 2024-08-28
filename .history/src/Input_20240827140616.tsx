import React from 'react';
import './Input.css'
import {useState} from 'react';
import CurrencyInput from 'react-currency-input-field';



function Input(){

    const [value, setValue] = useState(0);

    // function handleValueChange(val : number){
    //     setValue(val);
    // }

    return (
        <main>
            <form>
                <label className = "Amount"> Enter Amount:  </label>
                    <CurrencyInput
                        // className = {"InputTextBox" }
                        // prefix = {"$"}
                        // defaultValue = {0.00}
                        // decimalsLimit = {2}
                        // onValueChange = {handleValueChange}
                    />

                
            </form>

        </main>
        
    )
}

export default Input;
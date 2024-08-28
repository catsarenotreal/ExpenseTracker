import React from 'react';
import './Input.css'
import {useState} from 'react';
import CurrencyInput from 'react-currency-input-field';



function Input(){

    const [value, setValue] = useState<string | number>();

    const handleValueChange = (val: string) : void => {
        // setValue();
        return;
    }

    return (
        <main>
            <form>
                <label className = "Amount"> Enter Amount:  </label>
                    <CurrencyInput
                        name = "asdasdasdasdadsadasd"
                        id = "aksdnasd"
                        className = "InputTextBox" 
                        prefix = {"$"}
                        // defaultValue = {0.00}
                        decimalsLimit = {2}
                        onValueChange = {handleValueChange}
                    />

                
            </form>

        </main>
        
    )
}

export default Input;
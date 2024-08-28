import React from 'react';
import './Input.css'
import {useState} from 'react';



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
                    <input
                        name = "asdasdasdasdadsadasd"
                        id = "aksdnasd"
                        className = "InputTextBox" 
                        prefix = {"$"}
                    />

                
            </form>

        </main>
        
    )
}

export default Input;
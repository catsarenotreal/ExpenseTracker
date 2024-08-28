import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './MainApp';
import reportWebVitals from './reportWebVitals';
import CurrencyInput,  { CurrencyInputProps, CurrencyInputOnChangeValues } from 'react-currency-input-field';
import {useState} from 'react';




export const Example1 = () => {
  const limit = 1000;
  const prefix = '£';

  const [errorMessage, setErrorMessage] = useState('');
  const [className, setClassName] = useState('');
  const [value, setValue] = useState<string | number>(123.45);
  const [values, setValues] = useState<CurrencyInputOnChangeValues>();

  /**
   * Handle validation
   */
  const handleOnValueChange: CurrencyInputProps['onValueChange'] = (_value, name, _values) => {
    // _values is only for demo purposes in this example
    setValues(_values);

    if (!_value) {
      setClassName('');
      setValue('');
      return;
    }

    // value is over limit
    if (Number(_value) > limit) {
      setErrorMessage(`Max: ${prefix}${limit}`);
      setClassName('is-invalid');
      setValue(_value);
      return;
    }

    setClassName('is-valid');
    setValue(_value);
  };

  return (
    <div className="row">
      <div className="col-12 mb-4">
        <a
          href="https://github.com/cchanxzy/react-currency-input-field/blob/main/src/examples/Example1.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <h2>Example 1</h2>
        </a>
        <ul>
          <li>{`'£'`} prefix</li>
          <li>Allows decimals (up to 2 decimal places)</li>
          <li>Value is set programmatically (passed in via props)</li>
        </ul>

        <form className="needs-validation">
          <div className="row">
            <div className="form-group col">
              <label htmlFor="validationCustom01">Please enter a value (max £1,000)</label>
              <CurrencyInput
                id="validationCustom01"
                name="input-1"
                className={`form-control ${className}`}
                value={value}
                onValueChange={handleOnValueChange}
                placeholder="Please enter a number"
                prefix={prefix}
                step={1}
              />
              <div className="invalid-feedback">{errorMessage}</div>
            </div>
            <div className="form-group col">
              <pre className="h-100 p-3 bg-dark text-white">
                <div className="row">
                  <div className="col-6">
                    <div className="text-muted mr-3">onValueChange:</div>
                    {value}
                  </div>
                  <div className="col-6">
                    <div className="text-muted mr-3">Values:</div>
                    {JSON.stringify(values, undefined, ' ')}
                  </div>
                </div>
              </pre>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Example1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

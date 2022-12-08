import React from 'react';
import Screen from '../../atoms/Screen/Screen';
import ButtonBox from '../ButtonBox/ButtonBox';
import './calculator.scss';

function Calculator() {
  const [screenValue, setScreenValue] = React.useState('0');
  const [sign, setSign] = React.useState('');

  const screenValuePrev = React.useRef(screenValue);
  const keyboardHandler = (value: string): void => {
    console.log(value);
    const btnNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (btnNum.includes(value)) {
      if (screenValue === '0') {
        setScreenValue(value);
      } else {
        setScreenValue(screenValue + value);
      }
    }
    if (!btnNum.includes(value) && value !== '=') {
      screenValuePrev.current = screenValue;
      setSign(value);
      setScreenValue('0');
    }
    if (value === '=') {
      if (sign === '+') {
        setScreenValue((Number(screenValuePrev.current) + Number(screenValue)).toString());
      }
      if (sign === '-') {
        setScreenValue((Number(screenValuePrev.current) - Number(screenValue)).toString());
      }
      if (sign === '*') {
        setScreenValue((Number(screenValuePrev.current) * Number(screenValue)).toString());
      }
      if (sign === '/') {
        setScreenValue((Number(screenValuePrev.current) / Number(screenValue)).toString());
      }
      if (sign === '%') {
        setScreenValue((Number(screenValuePrev.current) % Number(screenValue)).toString());
      }
      if (sign === '+/-') {
        setScreenValue((Number(screenValuePrev.current) * -1).toString());
      }
      if (sign === 'AC') {
        setScreenValue('0');
      }

      setSign('');
    }
    console.log(`sign= ${sign}`);
    console.log(`screenValuePrev= ${screenValuePrev.current}`);
    console.log(`screenValue= ${screenValue}`);
  };
  // const screenDriver = (value: string) => {};
  return (
    <div className="wrapper">
      <Screen screenValue={screenValue} />
      <ButtonBox keyboardHandler={keyboardHandler} />
    </div>
  );
}

export default Calculator;

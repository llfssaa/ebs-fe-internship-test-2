import React from 'react';
import Screen from '../../atoms/Screen/Screen';
import ButtonBox from '../ButtonBox/ButtonBox';
import './calculator.scss';

function Calculator() {
  const [screenValue, setScreenValue] = React.useState('0');
  const [sign, setSign] = React.useState<string>('');

  const screenValuePrev = React.useRef(screenValue);
  const mainLogic = (value: string, prevVal: string, signBtn: string): void => {
    switch (signBtn) {
      case '+':
        setScreenValue((Number(prevVal) + Number(value)).toString());
        break;
      case '-':
        setScreenValue((Number(prevVal) - Number(value)).toString());
        break;
      case '*':
        setScreenValue((Number(prevVal) * Number(value)).toString());
        break;
      case '/':
        setScreenValue((Number(prevVal) / Number(value)).toString());
        break;
      case '%':
        setScreenValue((Number(prevVal) % Number(value)).toString());
        break;
      case 'AC':
        setScreenValue('0');
        break;
      default:
        setScreenValue(value);
    }
  };
  const keyboardHandler = (value: string): void => {
    console.log(value);
    const btnNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (btnNum.includes(value)) {
      if (
        screenValue === '0' ||
        screenValue.includes('+') ||
        screenValue.includes('-') ||
        screenValue.includes('*') ||
        screenValue.includes('/') ||
        screenValue.includes('%')
      ) {
        setScreenValue(value);
      } else {
        setScreenValue(screenValue + value);
      }
    }
    if (value === '.') {
      if (screenValue === '0') {
        setScreenValue('0.');
      } else {
        setScreenValue(screenValue + value);
      }
    }
    if (value === '+/-' && screenValue !== '0') {
      setScreenValue((Number(screenValue) * -1).toString());
    }
    if (!btnNum.includes(value) && value !== '=' && value !== '.' && value !== '+/-' && value !== 'AC') {
      screenValuePrev.current = screenValue;
      setSign(value);
      setScreenValue(value);
    }
    if (value === 'AC') {
      setScreenValue('0');
      setSign('');
    }

    if (value === '=') {
      mainLogic(screenValue, screenValuePrev.current, sign);
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

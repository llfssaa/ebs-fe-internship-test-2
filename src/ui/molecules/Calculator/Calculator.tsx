import React from 'react';
import Screen from '../../atoms/Screen/Screen';
import ButtonBox from '../ButtonBox/ButtonBox';
import './calculator.scss';
import { btnNum } from '../../../config';
import { isSign } from '../../../helpers';

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
  const screenDriver = (value: string) => {
    if (btnNum.includes(value)) {
      if (screenValue === '0' || isSign(screenValue)) {
        setScreenValue(value);
      } else {
        setScreenValue((prev) => prev + value);
      }
    }
    if (value === '.') {
      if (screenValue === '0') {
        setScreenValue('0.');
      } else {
        setScreenValue((prev) => prev + value);
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
  };
  const keyboardHandler = (value: string): void => {
    screenDriver(value);
    if (value === '=') {
      mainLogic(screenValue, screenValuePrev.current, sign);
      setSign('');
    }
  };
  return (
    <div className="wrapper">
      <Screen screenValue={screenValue} />
      <ButtonBox keyboardHandler={keyboardHandler} />
    </div>
  );
}

export default Calculator;

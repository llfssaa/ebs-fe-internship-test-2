import React from 'react';
import Screen from '../../atoms/Screen/Screen';
import ButtonBox from '../ButtonBox/ButtonBox';
import './calculator.scss';
import { btnNum, Sign, SpecialSign } from '../../../config';
import { isSign } from '../../../helpers';

function Calculator() {
  const [screenValue, setScreenValue] = React.useState('0');
  const [sign, setSign] = React.useState<string>('');

  const screenValuePrev = React.useRef(screenValue);
  const calcValue = React.useRef({ first: 0, second: 0 });
  const isSetSign = () => {
    return sign ? 'first' : 'second';
  };
  const mainLogic = (value: number, prevVal: number, signBtn: string): string => {
    switch (signBtn) {
      case Sign.Plus:
        return (prevVal + value).toString().length > 9
          ? (prevVal + value).toPrecision(5)
          : (prevVal + value).toString();
      case Sign.Minus:
        return (prevVal - value).toString().length > 9
          ? (prevVal - value).toPrecision(5)
          : (prevVal - value).toString();
      case Sign.Multiply:
        return (prevVal * value).toString().length > 9
          ? (prevVal * value).toPrecision(5)
          : (prevVal * value).toString();
      case Sign.Divide:
        return (prevVal / value).toString().length > 9
          ? (prevVal / value).toPrecision(5)
          : (prevVal / value).toString();
      case Sign.Percent:
        return (prevVal % value).toString().length > 9
          ? (prevVal % value).toPrecision(5)
          : (prevVal % value).toString();
      default:
        return value.toString();
    }
  };
  const screenDriver = (value: string) => {
    if (screenValue.length > 9 && btnNum.includes(value)) return;
    if (btnNum.includes(value)) {
      if (screenValue === '0' || isSign(screenValue)) {
        setScreenValue(value);
        calcValue.current[isSetSign()] = Number(value);
      } else {
        setScreenValue((prev) => prev + value);
        calcValue.current[isSetSign()] = Number(screenValue + value);
      }
    }
    if (value === SpecialSign.Dot) {
      if (screenValue === '0') {
        setScreenValue('0.');
        calcValue.current[isSetSign()] = Number(screenValue);
      } else {
        setScreenValue((prev) => prev + value);
        calcValue.current[isSetSign()] = Number(screenValue + value);
      }
    }
    if (value === SpecialSign.PlusMinus && screenValue !== '0') {
      setScreenValue((Number(screenValue) * -1).toString());
      calcValue.current[isSetSign()] = calcValue.current[isSetSign()] * -1;
    }
    if (!btnNum.includes(value) && isSign(value)) {
      screenValuePrev.current = screenValue;
      setSign(value);
      setScreenValue(value);
    }
    if (value === SpecialSign.AllClear) {
      setScreenValue('0');
      setSign('');
      calcValue.current = { first: 0, second: 0 };
    }
  };
  const keyboardHandler = (value: string): void => {
    if (value === SpecialSign.Equal) {
      setSign('');
      setScreenValue(mainLogic(calcValue.current.first, calcValue.current.second, sign));
      if (sign === '') {
        setScreenValue('0');
      }
    }
    screenDriver(value);
  };
  return (
    <div className="wrapper">
      <Screen screenValue={screenValue} />
      <ButtonBox keyboardHandler={keyboardHandler} />
    </div>
  );
}

export default Calculator;

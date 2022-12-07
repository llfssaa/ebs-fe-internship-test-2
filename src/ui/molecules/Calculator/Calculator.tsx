import React from 'react';
import Screen from '../../atoms/Screen/Screen';
import ButtonBox from '../ButtonBox/ButtonBox';
import './calculator.scss';

function Calculator() {
  return (
    <div className="wrapper">
      <Screen />
      <ButtonBox />
    </div>
  );
}

export default Calculator;

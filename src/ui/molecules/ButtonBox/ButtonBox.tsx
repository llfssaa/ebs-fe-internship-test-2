import React from 'react';
import './buttonBox.scss';
import Button from '../../atoms/Button/Button';
import { IButton, IButtonBox } from '../../../types';

const keyboardConfig: IButton[] = [
  { className: 'button', value: 'AC' },
  { className: 'button', value: '+/-' },
  { className: 'button', value: '%' },
  { className: 'button', value: '/' },
  { className: 'button', value: '1' },
  { className: 'button', value: '2' },
  { className: 'button', value: '3' },
  { className: 'button', value: '*' },
  { className: 'button', value: '4' },
  { className: 'button', value: '5' },
  { className: 'button', value: '6' },
  { className: 'button', value: '+' },
  { className: 'button', value: '7' },
  { className: 'button', value: '8' },
  { className: 'button', value: '9' },
  { className: 'button', value: '-' },
  { className: 'button zero', value: '0' },
  { className: 'button', value: '.' },
  { className: 'button', value: '=' },
];

function ButtonBox({ keyboardHandler }: IButtonBox) {
  return (
    <div className="buttonBox">
      {keyboardConfig.map((button) => (
        <Button
          key={button.value}
          keyboardHandler={keyboardHandler}
          className={button.className}
          value={button.value}
        />
      ))}
    </div>
  );
}

export default ButtonBox;

import React from 'react';
import './button.scss';
import { IButton } from '../../../types';

function Button({ className, value, keyboardHandler }: IButton) {
  return (
    <button onClick={() => (keyboardHandler ? keyboardHandler(value) : 0)} type="button" className={className}>
      {value}
    </button>
  );
}

export default Button;

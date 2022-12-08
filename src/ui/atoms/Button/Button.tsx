import React from 'react';
import './button.scss';
import { IButton } from '../../../types';

function Button({ className, value }: IButton) {
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
}

export default Button;

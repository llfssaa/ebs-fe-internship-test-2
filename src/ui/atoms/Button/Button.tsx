import React from 'react';
import './button.scss';

export interface IButton {
  className: string;
  value: string;
}
// eslint-disable-next-line no-unused-vars
function Button({ className, value }: IButton) {
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
}

export default Button;

import React from 'react';
import './button.scss';

export interface IButton {
  className: string;
  value: number;
}
// eslint-disable-next-line no-unused-vars
function Button({ className, value }: IButton) {
  return (
    <button type="button" className="button">
      value
    </button>
  );
}

export default Button;

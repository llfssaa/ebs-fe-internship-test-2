export interface IButtonBox {
  // eslint-disable-next-line no-unused-vars
  keyboardHandler?: (value: string) => void;
}
export interface IButton extends IButtonBox {
  className: string;
  value: string;
}

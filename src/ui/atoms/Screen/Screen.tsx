import React from 'react';
import './screen.scss';

interface IScreen {
  screenValue: string;
}
function Screen({ screenValue }: IScreen) {
  return <div className="screen">{screenValue}</div>;
}

export default Screen;

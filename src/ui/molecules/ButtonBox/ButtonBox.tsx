import React from 'react';
import './buttonBox.scss';
import Button from '../../atoms/Button/Button';

function ButtonBox() {
  return (
    <div className="buttonBox">
      <Button className="button gr" value="AC" />
      <Button className="button gr" value="+/-" />
      <Button className="button gr" value="%" />
      <Button className="button or" value="/" />
      <Button className="button" value="1" />
      <Button className="button" value="2" />
      <Button className="button" value="3" />
      <Button className="button or" value="*" />
      <Button className="button" value="4" />
      <Button className="button" value="5" />
      <Button className="button" value="6" />
      <Button className="button or" value="+" />
      <Button className="button" value="7" />
      <Button className="button" value="8" />
      <Button className="button" value="9" />
      <Button className="button or" value="-" />
      <Button className="button zero" value="0" />
      <Button className="button" value="." />
      <Button className="button or" value="=" />
    </div>
  );
}

export default ButtonBox;

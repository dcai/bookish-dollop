import React from 'react';
import { useSelector } from 'react-redux';
import '../led.css';

export const Led = (props) => {
  const status = useSelector((state) => {
    const safestatus = state.hotelsafe.status;
    return safestatus;
  });
  let ledColor = 'led-red';
  if (status === 'open') {
    ledColor = 'led-green';
  }
  return (
    <>
      <div className="led-box">
        <div className={ledColor}></div>
      </div>
    </>
  );
};

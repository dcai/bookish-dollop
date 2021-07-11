import React from 'react';
import { useSelector } from 'react-redux';

export const LcdDisplay = (props) => {
  const display = useSelector((state) => state.hotelsafe.display);
  return (
    <>
      <div
        className="is-size-2"
        style={{
          border: '5px black solid',
          borderRadius: '.5em',
          padding: '.1em',
          background: '#9EA18B',
          minHeight: '2em',
        }}
      >
        <p className="has-text-centered is-capitalized">{display}</p>
      </div>
    </>
  );
};

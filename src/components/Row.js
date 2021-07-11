import React from 'react';

export const Row = (props = {}) => {
  const cols = props.cols || 8;
  const colsclass = `is-${cols}`;
  return (
    <div className={`columns is-vcentered is-variable ${colsclass}`}>
      {props.children}
    </div>
  );
};

import React from 'react';

export const Col = (props) => {
  let classes = 'column has-text-left';
  classes += ` ${props.sizeClass}`;
  return <div className={classes}>{props.children}</div>;
};

// @flow
import React from 'react';
import { css } from 'emotion';

const classes = {
  greeting: css`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #1a1a1a;
    margin: 0 0 8px;
  `,
};

function Greeting() {
  return (
    <h1 className={classes.greeting}>
      Remove this layout and start coding.
    </h1>
  );
}

export default Greeting;

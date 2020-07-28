// @flow
import React from 'react';
import { css } from 'emotion';

import Greeting from '../Elements/Greeting';

const classes = {
  wrapper: css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  `,
  greeting: css`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #1a1a1a;
    margin: 0 0 8px;
  `,
  annotation: css`
    font-size: 13px;
    letter-spacing: 1px;
    line-height: 19px;
    color: #9b9b9b;
    white-space: pre-line;
    margin: 0;
  `,
};

function MainBoard() {
  return (
    <div className={classes.wrapper}>
      <Greeting />
      <p className={classes.annotation}>
        Please remember to follow the UI and eslint rules.
      </p>
    </div>
  );
}

export default MainBoard;

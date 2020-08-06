// @flow
import React, { useState } from 'react';
import { css } from 'emotion';
import check from '../static/images/checked-icon.png';

const classes = {
  btnStyle: css`
    width: 18px;
    height: 18px;
    background-color: transparent;
    border: solid 1px #1a1a1a;
    padding:0;
    margin-right:8px;
    position: relative;

  `,
  checkIcon: css`
    width: 18px;
    height: 18px;
    border: transparent;
    position: absolute;
    top: -1px;
    left: -1px;
  `,
};

export default function Checkbox({
  onClick,
  isAgree,
}: {
  onClick: Function,
  isAgree: boolean,
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(!isAgree)}
      className={classes.btnStyle}>
      {isAgree ? <img src={check} alt="Icon" className={classes.checkIcon} /> : null }
    </button>
  );
}
